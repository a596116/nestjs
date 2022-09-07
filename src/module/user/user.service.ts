// import { RedisService } from '@liaoliaots/nestjs-redis'
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { IResponse } from 'src/common/interface/response.interface'
import { Repository } from 'typeorm'
import { User } from './user.entity'
// import Redis from 'ioredis'
import { encript } from 'src/utils/Encription'

const logger = new Logger('user.service')
@Injectable()
export class UserService {
    @InjectRepository(User)
    private readonly repository: Repository<User>
    private response: IResponse
    // private redis: Redis
    constructor(
        // private readonly redisService: RedisService
    ) {
        // this.redis = this.redisService.getClient('haodai')
    }

    /**
     * 獲取所有用戶
     * @date 2022-08-27
     */
    async getAllUser(): Promise<IResponse> {
        const users = []
        return await this.repository.find()
            .then(async res => {
                res.forEach(user => {
                    users.push({ ...user, permissions: user.permissions.split(',') })
                })
                return this.response = {
                    code: 20000,
                    message: '獲取成功',
                    data: {
                        count: await this.repository.count(),
                        rows: users
                    }
                }
            })
            .catch(err => {
                logger.warn(err)
                return this.response = {
                    code: 40000,
                    message: err
                }
            })
    }

    /**
     * 根據帳號獲取用戶
     * @date 2022-08-27
     */
    async findOneByAccount(phone: string): Promise<User> {
        return await this.repository.findOne({ where: { phone } })
            .then(res => {
                if (res) {
                    return { ...res, permissions: res.permissions.split(',') }
                } else {
                    return res
                }
            })
    }

    /**
     * 獲取用戶資訊（未完成）
     * @date 2022-08-29
     */
    async getUserInfo(phone: string): Promise<IResponse> {
        return this.findOneByAccount(phone)
            .then(res => {
                if (res) {
                    return this.response = {
                        code: 20000,
                        data: {
                            ...res,
                            password: encript(res.password, res.name)
                        }
                    }
                } else {
                    throw this.response = {
                        code: 40000,
                        message: '獲取用戶失敗'
                    }
                }
            })
    }

    // async hello(): Promise<any> {
    //     return await this.redis.set('management', 'hello world')
    // }

}