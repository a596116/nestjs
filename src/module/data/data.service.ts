import { Injectable, UseInterceptors } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { error, success } from 'src/common/helper'
import { IResponse } from 'src/common/interface/response.interface'
import { Auth, AuthDocument } from '../db/schema/auth.schema'
import { UserService } from '../user/user.service'

@Injectable()
export class DataService {
    @InjectModel(Auth.name)
    private authModel: Model<AuthDocument>

    constructor(
        private readonly userService: UserService,
        private readonly config: ConfigService
    ) { }

    async alterUserAvatar(id: number, filename: string): Promise<IResponse> {
        return await this.authModel.findByIdAndUpdate(id, { avatar: `${this.config.get<string>('BASE_URL')}/avatar/${filename}` })
            .then(res => {
                return success('上傳頭像成功')
            })
    }

    /**
     * 獲取所有用戶
     * @date 2022-08-27
     */
    async getAllUser(page: number): Promise<IResponse> {
        const users = []
        return await this.authModel.find().skip(5 * (page - 1)).limit(5)
            .then(async res => {
                res.forEach(user => {
                    users.push(user)
                })
                return success('獲取成功', {
                    count: await this.authModel.count(),
                    rows: users
                })
            })
            .catch(err => {
                // logger.warn(err)
                return error(err)
            })
    }

    async alterData(table: string, id: number, obj: object): Promise<IResponse> {
        return this.authModel.findByIdAndUpdate(id, obj)
            .then(res => {
                return success('修改成功')
            })
    }
}
