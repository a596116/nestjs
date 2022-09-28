import { WebhookRequestBody } from '@line/bot-sdk'
import { Body, Controller, Post } from '@nestjs/common'
import { LineHandleEvent } from './line-handler/event.handler'

@Controller('linebot')
export class LinebotController {
    constructor(private readonly lineHandleEvent: LineHandleEvent) { }

    @Post()
    async handler(@Body() { events }: WebhookRequestBody) {
        return this.lineHandleEvent.handleEvent(events)
    }
}
