import { PrismaService } from 'src/module/prisma/prisma.service'
import liff from '@line/liff'

const prisma = new PrismaService()
export const articleTemplate = async (userid: string, url: string) => {
    const user = await prisma.lineUser.findFirst({ where: { id: userid } })
    const tem: any = {
        "type": "flex",
        "altText": "Setting Flex",
        "contents": {
            "type": "bubble",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "選擇要存放的類別",
                        "weight": "bold",
                        "size": "xl",
                        "align": "center",
                        "color": "#40739e"
                    },
                    {
                        "type": "separator",
                        "margin": "md",
                        "color": "#192a56"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [

                        ]
                    }
                ],
                "background": {
                    "type": "linearGradient",
                    "angle": "45deg",
                    "startColor": "#00b894",
                    "centerColor": "#81ecec",
                    "endColor": "#74b9ff"
                }
            }
        }
    }
    if (user.category.length) {
        user.category.forEach(v => {
            tem.contents.body.contents[2].contents.push({
                "type": "button",
                "action": {
                    "type": "postback",
                    "label": v,
                    "data": `${url}--${v}`
                },
                "color": "#192a56",
                "margin": "md"
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
}

export const findArticle = async (userid: string) => {
    const user = await prisma.lineUser.findFirst({ where: { id: userid } })
    const tem: any = {
        "type": "flex",
        "altText": "Setting Flex",
        "contents": {
            "type": "bubble",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                        "type": "text",
                        "text": "選擇要查看的類別",
                        "weight": "bold",
                        "size": "xl",
                        "align": "center",
                        "color": "#40739e"
                    },
                    {
                        "type": "separator",
                        "margin": "md",
                        "color": "#192a56"
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [

                        ]
                    }
                ],
                "background": {
                    "type": "linearGradient",
                    "angle": "45deg",
                    "startColor": "#00b894",
                    "centerColor": "#81ecec",
                    "endColor": "#74b9ff"
                }
            }
        }
    }
    if (user.category.length) {
        user.category.forEach(v => {
            tem.contents.body.contents[2].contents.push({
                "type": "button",
                "action": {
                    "type": "postback",
                    "label": v,
                    "data": `findArticle--${v}`
                },
                "color": "#192a56",
                "margin": "md"
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
}
