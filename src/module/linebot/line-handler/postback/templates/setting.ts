import { Injectable } from '@nestjs/common'
import { ConfigService } from 'src/module/linebot/config/config.service'
import { PrismaService } from 'src/module/prisma/prisma.service'

@Injectable()
export class SettingPostBack {
    constructor(
        private prisma: PrismaService,
        private configService: ConfigService
    ) {
    }
    async handleByPostBackType(events: any): Promise<any> {
        const { postback: { data }, replyToken, source: { userId } } = events
        switch (data.match(/[\u4e00-\u9fa5]+/ig)[0]) {
            case '新增': {
                await this.prisma.lineUser.update({
                    where: { id: userId },
                    data: {
                        callback: 'setting新增'
                    }
                })
                return {
                    type: 'text',
                    text: '請輸入要新增的類別'
                }
            }
            case '刪除': {
                await this.prisma.lineUser.update({
                    where: { id: userId },
                    data: {
                        callback: 'setting刪除'
                    }
                })
                return {
                    type: 'text',
                    text: '請輸入要刪除的類別'
                }
            }
        }
    }

}
