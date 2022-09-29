import { Injectable } from '@nestjs/common'
import { MessageEventPayload } from '../../../interfaces/line.interface'
import { ContactAdminContext } from './text-context/contact-admin.context'
import { MessageAPIResponseBase } from '@line/bot-sdk'
import { ConfigService } from 'src/module/linebot/config/config.service'
import { MappingContext } from '../../../lib/mapping-context'
import { fashionTemplate } from 'src/module/linebot/line-handler/message/templates/fashion'
import { movieTemplate } from 'src/module/linebot/line-handler/message/templates/movie'
import { technologyTemplate } from '../templates/technology'
import { menuTemplate } from '../templates/menu'
import { otherTemplate } from '../templates/other'
import { githubTemplate } from '../templates/github'

@Injectable()
export class TextHandler {
  private readonly messageContext: object

  constructor(
    private readonly contactAdminContext: ContactAdminContext,
    private configService: ConfigService
  ) {
    this.messageContext = {
      contactAdmin: this.contactAdminContext
    }
  }

  async handleByMessageType(messageEvent: MessageEventPayload): Promise<any> {
    const { message: { text } } = messageEvent

    return this.messageContext[MappingContext.detector[text]]?.handleByMessageContext(messageEvent) ?? this.replyDefaultMessage(messageEvent)
  }

  private async replyDefaultMessage(messageEvent: MessageEventPayload): Promise<MessageAPIResponseBase> {
    const { message: { text }, replyToken, type } = messageEvent
    if (type === 'message') {
      switch (text.replace(/^\s*|\s*$/g, "")) {
        case 'Fashion': {
          return this.configService.createLinebotClient().replyMessage(replyToken, fashionTemplate)
        }
        case 'Movie': {
          return this.configService.createLinebotClient().replyMessage(replyToken, movieTemplate)
        }
        case 'Technology': {
          return this.configService.createLinebotClient().replyMessage(replyToken, technologyTemplate)
        }
        case 'Menus': {
          return this.configService.createLinebotClient().replyMessage(replyToken, menuTemplate)
        }
        case 'Github': {
          return this.configService.createLinebotClient().replyMessage(replyToken, githubTemplate)
        }
        case '?':
        case decodeURI('%EF%BC%9F'):
          return this.configService.createLinebotClient().replyMessage(replyToken, otherTemplate)

        default: {
          return this.configService.createLinebotClient().replyMessage(replyToken, {
            type: 'text',
            text: '請嘗試其他功能！'
          })
        }
      }
    }
  }
}