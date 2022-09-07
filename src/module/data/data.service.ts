import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
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
}
