import { TemplateMessage } from "@line/bot-sdk"

export const technologyTemplate: TemplateMessage = {
    type: 'template',
    altText: 'Technology Template',
    template: {
        type: 'buttons',
        thumbnailImageUrl: 'https://ps-attachments.s3.amazonaws.com/cc810a17-c903-405a-b914-be7622637dc2/ixTAUT5DNBKQzZaBAixIkA.jpg',
        title: '科技資訊',
        text: '您要查詢的是？',
        actions: [
            { label: '癮科技', type: 'postback', data: 'technology癮科技' },
            { label: 'eprice', type: 'postback', data: 'technology資訊' },
            { label: '瘋先生', type: 'postback', data: 'technology瘋先生' }
        ],
    },
}