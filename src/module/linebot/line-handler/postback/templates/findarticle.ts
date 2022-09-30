import { Injectable } from '@nestjs/common'
import { ConfigService } from 'src/module/linebot/config/config.service'
import { PrismaService } from 'src/module/prisma/prisma.service'

@Injectable()
export class FindArticlePostBack {
    constructor(
        private prisma: PrismaService,
        private configService: ConfigService
    ) {
    }
    async handleByPostBackType(events: any): Promise<any> {
        const { postback: { data }, source: { userId } } = events
        return await this.prisma.lineUserArticle.findMany({
            where: {
                authorId: userId,
                type: data.split('--')[1]
            }
        }).then((v) => {
            if (v.length) {
                let tem: any = {
                    "type": "flex",
                    "altText": "Setting Flex",
                    "contents": {
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                            ],
                            "background": {
                                "type": "linearGradient",
                                "angle": "45deg",
                                "startColor": "#78e08f",
                                "endColor": "#38ada9",
                                "centerColor": "#b8e994"
                            }
                        }
                    }
                }
                v.forEach(url => {
                    tem.contents.body.contents.push({
                        "type": "text",
                        "text": url.url,
                        "action": {
                            "type": "uri",
                            "label": 'url',
                            "uri": url.url
                        },
                        "align": "center",
                        "margin": "lg"
                    })
                })
                return tem
            } else {
                return {
                    type: 'text',
                    text: '沒有內容'
                }
            }
        }).catch(() => {
            return {
                type: 'text',
                text: '查詢失敗！'
            }
        })
    }
}
