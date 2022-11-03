import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { error, paginate, success } from 'src/common/helper'
import { app } from 'src/config/app'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class DataService {
    constructor(
        @Inject(app.KEY) private appConfig: ConfigType<typeof app>,
        private readonly prisma: PrismaService
    ) { }

    /**
     * 獲取所有文章
     * @date 2022-09-15
     */
    async getAllTopic(page: number, query?: any) {
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
        const data = await this.prisma.topic.findMany({
            where: search,
            skip: (page - 1) * this.appConfig.user_page_row,
            take: this.appConfig.user_page_row,
            orderBy: [{
                createdAt: order
            }]
        })
        const total = await this.prisma.topic.count({
            where: search,
        })
        return paginate({
            data,
            total,
        })
    }



    /**
     * 
     * 新增資料區
     * 
     */
    async createTopic(table: string, obj: object) {
        return await this.prisma[table].create({
            data: { ...obj }
        }).then(() => {
            return success('新增成功')
        }).catch((err) => {
            return error('新增失敗')
        })
    }



    /**
     * 修改資料
     * @date 2022-09-14
     */
    async alterData(table: string, id: string, obj: object) {
        return this.prisma.topic.update({
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


    /**
     * 刪除資料
     * @date 2022-10-31
     */

    async deleteData(table: string, id: string) {
        return this.prisma.topic.delete({ where: { id } })
            .then(() => {
                return success('刪除成功')
            }).catch(() => {
                return error('刪除失敗')
            })
    }
}
