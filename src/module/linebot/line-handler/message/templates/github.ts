import { FlexMessage } from "@line/bot-sdk"

export const githubTemplate: FlexMessage = {
    "type": "flex",
    "altText": "Github Flex",
    "contents": {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://st4.depositphotos.com/18014766/28577/i/600/depositphotos_285779578-stock-photo-github-with-abstract-technology-binary.jpg",
            "size": "full",
            "aspectRatio": "10:7",
            "aspectMode": "cover",
            "action": {
                "type": "uri",
                "label": "Github",
                "uri": "https://github.com/a596116"
            }
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "前端網頁和後台管理系統 ➣",
                        "uri": "https://github.com/a596116/web"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#c7ecee"
                },
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "Node.js搭配eggjs開發後端 ➣",
                        "uri": "https://github.com/a596116/server"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#c7ecee"
                },
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "Node.js搭配nestjs開發後端 ➣",
                        "uri": "https://github.com/a596116/nestjs"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#c7ecee"
                },
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "大學畢業專題網站 ➣",
                        "uri": "https://github.com/a596116/ir"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#c7ecee"
                },
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "資料創新應用競賽-寵愛LineBot ➣",
                        "uri": "https://github.com/a596116/petLove"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#c7ecee"
                }
            ],
            "background": {
                "type": "linearGradient",
                "angle": "45deg",
                "startColor": "#37153f",
                "endColor": "#425698"
            }
        }
    }
}