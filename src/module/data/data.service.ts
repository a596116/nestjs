import { Inject, Injectable } from '@nestjs/common'
import { ConfigService, ConfigType } from '@nestjs/config'
import { error, paginate, success } from 'src/common/helper'
import { IResponse } from 'src/common/interface/response.interface'
import { app } from 'src/config/app'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class DataService {
    constructor(
        @Inject(app.KEY) private appConfig: ConfigType<typeof app>,
        private readonly config: ConfigService,
        private readonly prisma: PrismaService
    ) { }

    /**
     * 修改用戶頭像
     * @date 2022-09-14
     */
    async alterUserAvatar(id: string, filename: string): Promise<IResponse> {
        return await this.prisma.user.update({
            where: { id: id },
            data: {
                avatar: `${this.config.get<string>('BASE_URL')}/avatar/${filename}`
            }
        }).then(() => {
            return success('上傳頭像成功')
        }).catch(err => {
            throw error(err)
        })
    }

    /**
     * 獲取所有用戶
     * @date 2022-09-15
     */
    async getAllBlog(page: number, query?: any) {
        let q = []
        Object.keys(query).map(item => {
            let i = {}
            if (item === 'category') {
                i[item] = { hasSome: query[item] }
            }
            else if (item === 'order') {
                return
            } else {
                i[item] = { contains: query[item] }
            }
            q.push(i)
        })
        const order = query?.order?.replace('ending', '') || 'desc'
        const search = q.length ? { AND: q } : {}
        const data = await this.prisma.blog.findMany({
            where: search,
            skip: (page - 1) * this.appConfig.user_page_row,
            take: this.appConfig.user_page_row,
            orderBy: [{
                createdAt: order
            }]
        })
        const total = await this.prisma.blog.count({
            where: search,
        })
        return paginate({
            data,
            total,
        })
    }
    /**
     * 獲取所有用戶
     * @date 2022-09-15
     */
    async getAllUser(page: number, query?: any) {
        let q = []
        Object.keys(query).map(item => {
            let i = {}
            if (item === 'permissions') {
                i[item] = { hasSome: query[item] }
            }
            else if (item === 'order') {
                return
            } else {
                i[item] = { contains: query[item] }
            }
            q.push(i)
        })
        const order = query?.order?.replace('ending', '') || 'asc'
        const search = q.length ? { AND: q } : {}
        const data = await this.prisma.user.findMany({
            where: search,
            skip: (page - 1) * this.appConfig.user_page_row,
            take: this.appConfig.user_page_row,
            orderBy: [{
                createdAt: order
            }]
        })
        const total = await this.prisma.user.count({
            where: search,
        })
        return paginate({
            data,
            total,
        })
    }

    /**
     * 修改資料
     * @date 2022-09-14
     */
    async alterData(table: string, id: string, obj: object) {
        return this.prisma[table].update({
            where: {
                id: id
            },
            data: { ...obj }
        }).then(() => {
            return success('更新成功')
        }).catch(() => {
            return error('更新失敗')
        })
    }

    async createData(table: string, obj: object) {
        return this.prisma[table].create({
            data: obj
        }).then(() => {
            return success('新增成功')
        }).catch(() => {
            return error('新增失敗')
        })
    }

    async deleteData(table: string, id: string) {
        return this.prisma[table].delete({ where: { id } })
            .then(() => {
                return success('刪除成功')
            }).catch(() => {
                return error('刪除失敗')
            })
    }
}
