import { Injectable, UseInterceptors } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { TransformInterceptor } from 'src/common/interception/transform.interception'
import { IResponse } from 'src/common/interface/response.interface'
import { Auth, AuthDocument } from '../db/schema/auth.schema'
import { UserService } from '../user/user.service'

@Injectable()
export class DataService {
    @InjectModel(Auth.name)
    private authModel: Model<AuthDocument>
    private response: IResponse

    constructor(
        private readonly userService: UserService,
        private readonly config: ConfigService
    ) { }

    async alterUserAvatar(id: number, filename: string): Promise<IResponse> {
        return await this.authModel.findByIdAndUpdate(id, { avatar: `${this.config.get<string>('BASE_URL')}/avatar/${filename}` })
            .then(res => {
                return this.response = {
                    code: 20000,
                    message: '上傳頭像成功',
                }
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
                return this.response = {
                    code: 20000,
                    message: '獲取成功',
                    data: {
                        count: await this.authModel.count(),
                        rows: users
                    }
                }
            })
            .catch(err => {
                // logger.warn(err)
                return this.response = {
                    code: 40000,
                    message: err
                }
            })
    }

    async alterData(table: string, id: number, obj: object): Promise<IResponse> {
        return this.authModel.findByIdAndUpdate(id, obj)
            .then(res => {
                return this.response = {
                    code: 20000,
                    message: '修改成功'
                }
            })
    }
}
