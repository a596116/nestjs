// import { RedisService } from '@liaoliaots/nestjs-redis'
import { Injectable, Logger } from '@nestjs/common'
import { IResponse } from 'src/common/interface/response.interface'
// import Redis from 'ioredis'
import { InjectModel } from '@nestjs/mongoose'
import { Auth, AuthDocument } from '../db/schema/auth.schema'
import { Model } from 'mongoose'

// const logger = new Logger('user.service')
@Injectable()
export class UserService {
    @InjectModel(Auth.name)
    private authModel: Model<AuthDocument>

    private response: IResponse
    // private redis: Redis
    constructor(
        // private readonly redisService: RedisService
    ) {
        // this.redis = this.redisService.getClient('haodai')
    }

    /**
     * 根據帳號獲取用戶
     * @date 2022-08-27
     */
    async findOneByPhone(phone: string): Promise<any> {
        return await this.authModel.findOne({ phone })
            .then(res => res)
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
                    return this.response = {
                        code: 20000,
                        data: res
                    }
                } else {
                    throw this.response = {
                        code: 40000,
                        message: '獲取用戶失敗'
                    }
                }
            })
            .catch(res => {
                // logger.warn(res)
                return this.response
            })
    }

    // async hello(): Promise<any> {
    //     return await this.redis.set('management', 'hello world')
    // }

}