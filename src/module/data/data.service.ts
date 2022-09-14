import { Inject, Injectable } from '@nestjs/common'
import { ConfigService, ConfigType } from '@nestjs/config'
import { error, paginate, success } from 'src/common/helper'
import { IResponse } from 'src/common/interface/response.interface'
import { app } from 'src/config/app'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class DataService {
    constructor(
        @Inject(app.KEY) private appConfig: ConfigType<typeof app>,
        private readonly config: ConfigService,
        private readonly prisma: PrismaService
    ) { }

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

    /**
     * 獲取所有用戶
     * @date 2022-09-14
     */
    async getAllUser(page: number) {
        const data = await this.prisma.user.findMany({
            skip: (page - 1) * this.appConfig.user_page_row,
            take: this.appConfig.user_page_row,
        })
        const total = await this.prisma.user.count()
        return success('獲取成功',
            paginate({
                data,
                page,
                row: this.appConfig.user_page_row,
                total,
            }))
    }

    async alterData(table: string, id: number, obj: object) {
        // return this.authModel.findByIdAndUpdate(id, obj)
        //     .then(res => {
        //         return success('修改成功')
        //     })
    }
}
