import { FlexMessage, TextMessage } from "@line/bot-sdk"
import { PrismaService } from 'src/module/prisma/prisma.service'

const prisma = new PrismaService()
export const settingTemplate = async (userid: string) => {
    const user = await prisma.lineUser.findFirst({ where: { id: userid } })
    return await prisma.lineUser.update({
        where: { id: userid },
        data: {
            callback: 'setting'
        }
    }).then(() => {
        const tem: any = {
            "type": "flex",
            "altText": "menu",
            "contents": {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                            ]
                        },
                        {
                            "type": "separator",
                            "margin": "lg",
                            "color": "#ffffff"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                    "type": "button",
                                    "action": {
                                        "type": "postback",
                                        "label": "新增",
                                        "data": "setting新增"
                                    },
                                    "style": "secondary",
                                    "color": "#3dc1d3"
                                },
                                {
                                    "type": "button",
                                    "action": {
                                        "type": "postback",
                                        "label": "刪除",
                                        "data": "setting刪除"
                                    },
                                    "style": "secondary",
                                    "color": "#f78fb3"
                                }
                            ],
                            "margin": "lg"
                        }
                    ],
                    "background": {
                        "type": "linearGradient",
                        "angle": "45deg",
                        "startColor": "#f7d794",
                        "endColor": "#63cdda"
                    }
                }
            }
        }
        if (user.category.length) {
            user.category.forEach(v => {
                tem.contents.body.contents[0].contents.push({
                    "type": "text",
                    "text": v,
                    "align": "center",
                    "weight": "bold",
                    "color": "#596275"
                })
            })
        } else {
            tem.contents.body.contents[0].contents.push({
                "type": "text",
                "text": "undefined",
                "align": "center",
                "weight": "bold",
                "color": "#596275"
            })
        }
        return tem
    })
}

export const settingAdd = async (userid: string, text: string): Promise<TextMessage> => {
    const user = await prisma.lineUser.findFirst({ where: { id: userid } })
    if (user.category.indexOf(text) !== -1) {
        await prisma.lineUser.update({
            where: { id: userid },
            data: {
                callback: ''
            }
        })
        return {
            type: 'text',
            text: '已經有此類別！'
        }
    } else {
        user.category.push(text)
        await prisma.lineUser.update({
            where: { id: userid },
            data: {
                callback: '',
                category: user.category
            }
        })
        return {
            type: 'text',
            text: `已新增類別 - ${text}`
        }
    }
}
export const settingDel = async (userid: string, text: string): Promise<TextMessage> => {
    const user = await prisma.lineUser.findFirst({ where: { id: userid } })
    if (user.category.indexOf(text) === -1) {
        await prisma.lineUser.update({
            where: { id: userid },
            data: {
                callback: ''
            }
        })
        return {
            type: 'text',
            text: '沒有有此類別！'
        }
    } else {
        user.category.splice(user.category.indexOf(text), 1)
        await prisma.lineUser.update({
            where: { id: userid },
            data: {
                callback: '',
                category: user.category
            }
        })
        return {
            type: 'text',
            text: `已刪除類別 - ${text}`
        }
    }
}