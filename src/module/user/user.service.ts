// import { RedisService } from '@liaoliaots/nestjs-redis'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { IResponse } from 'src/common/interface/response.interface'
// import Redis from 'ioredis'
import { error, paginate, success } from 'src/common/helper'
import { PrismaService } from '../prisma/prisma.service'
import { ConfigService, ConfigType } from '@nestjs/config'
import { app } from 'src/config/app'

// const logger = new Logger('user.service')
@Injectable()
export class UserService {
    // private redis: Redis
    constructor(
        @Inject(app.KEY) private appConfig: ConfigType<typeof app>,
        private readonly config: ConfigService,
        private readonly prisma: PrismaService
        // private readonly redisService: RedisService
    ) {
        // this.redis = this.redisService.getClient('haodai')
    }

    /**
     * 根據帳號獲取用戶
     * @date 2022-08-27
     */
    async findOneByPhone(phone: string) {
        return await this.prisma.user.findUnique({ where: { phone: phone } })
    }

    /**
     * 獲取用戶資訊
     * @date 2022-08-29
     */
    async getUserInfo(phone: string): Promise<IResponse> {
        return this.findOneByPhone(phone)
            .then(res => {
                if (res) {
                    Object.assign(res, { password: '' })
                    return success(null, res)
                } else {
                    throw error('獲取用戶失敗')
                }
            })
            .catch(res => {
                // logger.warn(res)
                return res
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
    async alterUser(table: string, id: string, obj: object) {
        return this.prisma.user.update({
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
}