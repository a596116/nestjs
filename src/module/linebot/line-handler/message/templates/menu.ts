import { FlexMessage } from "@line/bot-sdk"

export const menuTemplate: FlexMessage = {
    "type": "flex",
    "altText": "HaoDai Menus",
    "contents": {
        "type": 'bubble',
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "主頁 ➣",
                        "uri": "https://haodai.tw/hd"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#f6e58d"
                },
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "博客 ➣",
                        "uri": "https://wanghaodai.com/"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#f6e58d"
                },
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "後台系統 ➣",
                        "uri": "https://haodai.tw/admin"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#f6e58d"
                },
                {
                    "type": "separator",
                    "margin": "md",
                    "color": "#dff9fb"
                }
            ],
            "background": {
                "type": "linearGradient",
                "angle": "45deg",
                "startColor": "#ffbe76",
                "endColor": "#22a6b3"
            }
        }
    }
}