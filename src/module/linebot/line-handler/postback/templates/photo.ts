import { Injectable } from '@nestjs/common'

@Injectable()
export class PhotoPostBack {
    async handleByPostBackType(events: any): Promise<any> {
        const { postback: { data } } = events
        return {
            type: 'image',
            originalContentUrl: data.replace('photo', ''),
            previewImageUrl: data.replace('photo', '')
        }
    }

}
