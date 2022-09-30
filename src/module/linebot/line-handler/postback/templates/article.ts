import { Injectable } from '@nestjs/common'
import { ConfigService } from 'src/module/linebot/config/config.service'
import { PrismaService } from 'src/module/prisma/prisma.service'

@Injectable()
export class ArticlePostBack {
    constructor(
        private prisma: PrismaService,
    ) {
    }
    async handleByPostBackType(events: any): Promise<any> {
        const { postback: { data }, source: { userId } } = events
        return await this.prisma.lineUserArticle.create({
            data: {
                url: data.split('--')[0],
                type: data.split('--')[1],
                authorId: userId
            }
        }).then(() => {
            return {
                type: 'text',
                text: `成功新增到-${data.split('--')[1]}`
            }
        }).catch(() => {
            return {
                type: 'text',
                text: '新增失敗！'
            }
        })
    }

}
