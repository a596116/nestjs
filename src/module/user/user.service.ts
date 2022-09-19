// import { RedisService } from '@liaoliaots/nestjs-redis'
import { Injectable, Logger } from '@nestjs/common'
import { IResponse } from 'src/common/interface/response.interface'
// import Redis from 'ioredis'
import { error, success } from 'src/common/helper'
import { PrismaService } from '../prisma/prisma.service'

// const logger = new Logger('user.service')
@Injectable()
export class UserService {
    // private redis: Redis
    constructor(
        private readonly prisma: PrismaService
        // private readonly redisService: RedisService
    ) {
        // this.redis = this.redisService.getClient('haodai')
    }

    /**
     * 根據帳號獲取用戶
     * @date 2022-08-27
     */
    async findOneByPhone(phone: string): Promise<any> {
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

    // async hello(): Promise<any> {
    //     return await this.redis.set('management', 'hello world')
    // }

}