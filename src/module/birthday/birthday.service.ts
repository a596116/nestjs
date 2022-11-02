import { Inject, Injectable } from '@nestjs/common'
import { ConfigService, ConfigType } from '@nestjs/config'
import { error, paginate, success } from 'src/common/helper'
import { IResponse } from 'src/common/interface/response.interface'
import { app } from 'src/config/app'
import { PrismaService } from '../prisma/prisma.service'
import { birthdayDto } from '../birthday/dto/bitrhdat.dto'
@Injectable()
export class BirthdayService {
    constructor(
        @Inject(app.KEY) private appConfig: ConfigType<typeof app>,
        private readonly config: ConfigService,
        private readonly prisma: PrismaService
    ) { }
    /**
     * 獲取所有壽星
     * @date 2022-09-15
     */
    async getAllBirthday(page: number, query?: any) {
        let q = []
        Object.keys(query).map(item => {
            let i = {}
            if (item === 'order') {
                return
            } else {
                i[item] = { contains: query[item] }
            }
            q.push(i)
        })
        const order = query?.order?.replace('ending', '') || 'desc'
        const search = q.length ? { AND: q } : {}
        const data = await this.prisma.birthday.findMany({
            where: search,
            skip: (page - 1) * this.appConfig.user_page_row,
            take: this.appConfig.user_page_row,
            orderBy: [{
                createdAt: order
            }],
            include: {
                gift: true
            }
        })
        const total = await this.prisma.birthday.count({
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
    async createBirthday(obj: birthdayDto) {
        return await this.prisma.birthday.create({
            data: {
                name: obj.name,
                url: obj.url,
                gift: {
                    create: obj.gift
                }
            },
            include: {
                gift: true
            }
        }).then(() => {
            return success('新增成功')
        }).catch((err) => {
            return error('新增失敗')
        })
    }



    /**
     * 修改資料
     * @date 2022-10-31
     */
    async alterData(id: string, obj: birthdayDto) {
        let g = []
        obj.gift.forEach((item, i) => {
            g[i] = { img: item.img, p: item.p }
        })

        return this.prisma.birthday.update({
            where: {
                id: id
            },
            data: {
                name: obj.name,
                url: obj.url,
                gift: {
                    deleteMany: {},
                    create: g
                }
            },
            include: {
                gift: true
            }
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

    async deleteData(id: string) {
        return this.prisma.birthday.delete({
            where: { id },
            include: {
                gift: true
            }
        })
            .then(() => {
                return success('刪除成功')
            }).catch(() => {
                return error('刪除失敗')
            })
    }
}
