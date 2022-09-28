import { TemplateMessage } from "@line/bot-sdk"

export const movieTemplate: TemplateMessage = {
    type: 'template',
    altText: 'Buttons alt text',
    template: {
        type: 'buttons',
        thumbnailImageUrl: 'https://www.brandinlabs.com/wp-content/uploads/2013/04/twentieth-century-fox-logo.jpg',
        title: '電影',
        text: '您要查詢的是？',
        actions: [
            { label: '電影排行榜', type: 'postback', data: 'movie電影排行榜', text: '查詢電影排行榜...' },
            { label: '本周新片', type: 'postback', data: 'movie本周新片', text: '查詢本周新片...' },
            { label: '即將上映', type: 'postback', data: 'movie即將上映', text: '查詢即將上映...' }
        ],
    },
}