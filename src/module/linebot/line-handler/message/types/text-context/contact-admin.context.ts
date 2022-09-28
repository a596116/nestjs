import { Injectable } from '@nestjs/common'
import { ConfigService } from 'src/module/linebot/config/config.service'
import { MessageEventPayload } from '../../../../interfaces/line.interface'

@Injectable()
export class ContactAdminContext {
  constructor(private configService: ConfigService) { }
  async handleByMessageContext(messageEvent: MessageEventPayload): Promise<any> {
    const { replyToken } = messageEvent

    const userProfile = await this.configService.createLinebotClient().getProfile(messageEvent.source.userId)


    return this.configService.createLinebotClient().replyMessage(replyToken, {
      type: 'text',
      text: `Contacting admin...\nWaiting for queue...\nCheck your queue here\n⏱⏱⏱⏱⏱⏱⏱\nline://app/1653595847-nmVaNlX7`
    })
  }
}
