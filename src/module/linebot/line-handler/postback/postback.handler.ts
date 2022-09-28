import { Injectable } from '@nestjs/common'
import { ConfigService } from '../../config/config.service'
import { PostbackEventPayload } from '../../interfaces/line.interface'
import { FashionPostBack } from './templates/fashion'
import { MoviePostBack } from './templates/movie'
import { PhotoPostBack } from './templates/photo'
import { TechnologyPostBack } from './templates/technology'

@Injectable()
export class PostbackHandler {
  private readonly postbackTypes: object
  constructor(
    private readonly FashionPostBack: FashionPostBack,
    private readonly PhotoPostBack: PhotoPostBack,
    private readonly MoviePostBack: MoviePostBack,
    private readonly TechnologyPostBack: TechnologyPostBack,
    private configService: ConfigService
  ) {
    this.postbackTypes = {
      fashion: this.FashionPostBack,
      movie: this.MoviePostBack,
      technology: this.TechnologyPostBack,
      photo: this.PhotoPostBack,
    }
  }
  async handleByEvent(event: PostbackEventPayload): Promise<any> {
    const { postback: { data }, replyToken } = event
    let type = ''
    Object.keys(this.postbackTypes).forEach((k: string) => {
      data.match(new RegExp('^' + k, 'ig')) ? type = k : null
    })
    const postback = await this.postbackTypes[type].handleByPostBackType(event)
    return this.configService.createLinebotClient().replyMessage(replyToken, postback)
  }
}
