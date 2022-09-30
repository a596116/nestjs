import { Injectable } from '@nestjs/common'
import { ConfigService } from '../../config/config.service'
import { PostbackEventPayload } from '../../interfaces/line.interface'
import { ArticlePostBack } from './templates/article'
import { FindArticlePostBack } from './templates/findarticle'
import { PhotoPostBack } from './templates/photo'
import { SettingPostBack } from './templates/setting'

@Injectable()
export class PostbackHandler {
  private readonly postbackTypes: object
  constructor(
    private readonly PhotoPostBack: PhotoPostBack,
    private readonly SettingPostBack: SettingPostBack,
    private readonly ArticlePostBack: ArticlePostBack,
    private readonly FindArticlePostBack: FindArticlePostBack,
    private configService: ConfigService
  ) {
    this.postbackTypes = {
      photo: this.PhotoPostBack,
      setting: this.SettingPostBack,
      http: this.ArticlePostBack,
      findArticle: this.FindArticlePostBack,
    }
  }
  async handleByEvent(event: PostbackEventPayload): Promise<any> {
    const { postback: { data }, replyToken } = event
    let type = ''
    Object.keys(this.postbackTypes).forEach((k: string) => {
      data.match(new RegExp('^' + k, 'ig')) ? type = k : null
    })
    const postback = await this.postbackTypes[type]?.handleByPostBackType(event) || null
    console.log(postback)

    if (postback) {
      return await this.configService.createLinebotClient().replyMessage(replyToken, postback)
        .catch(err => {
          return this.configService.createLinebotClient().replyMessage(replyToken, {
            type: 'text',
            text: '操作錯誤！'
          })
        })
    } else {
      return this.configService.createLinebotClient().replyMessage(replyToken, {
        type: 'text',
        text: '該功能暫時無法使用！'
      })
    }
  }
}
