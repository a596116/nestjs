import { TemplateMessage } from "@line/bot-sdk"

export const fashionTemplate: TemplateMessage = {
    type: 'template',
    altText: 'Fashion Template',
    template: {
        type: 'buttons',
        thumbnailImageUrl: 'https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2021/09/IMG_1021.jpeg?fit=2000%2C1499&quality=100&ssl=1',
        title: '時尚',
        text: '您要查詢的是？',
        actions: [
            { label: 'hypebeast時裝', type: 'postback', data: 'fashion時裝' },
            { label: 'hypebeast球鞋', type: 'postback', data: 'fashion球鞋' },
            // { label: 'Cool球鞋', type: 'postback', data: 'fashionCool球鞋', text: '查詢Cool球鞋' }
        ],
    },
}