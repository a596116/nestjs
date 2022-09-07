import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { InjectRepository } from '@nestjs/typeorm'
import { IResponse } from 'src/common/interface/response.interface'
import { Repository } from 'typeorm'
import { User } from '../user/user.entity'
import { UserService } from '../user/user.service'

@Injectable()
export class DataService {
    @InjectRepository(User)
    private readonly repository: Repository<User>
    private response: IResponse

    constructor(
        private readonly userService: UserService,
        private readonly config: ConfigService
    ) { }

    async alterUserAvatar(id: number, filename: string): Promise<IResponse> {
        return await this.repository.createQueryBuilder()
            .update('user')
            .set({ avatar: `${this.config.get<string>('BASE_URL')}/avatar/${filename}` })
            .where("id = :id", { id: id })
            .execute()
            .then(res => {
                return this.response = {
                    code: 20000,
                    message: '上傳頭像成功',
                }
            })
    }
}
