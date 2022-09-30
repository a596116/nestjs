import { Module } from '@nestjs/common'
import { LinebotService } from './linebot.service'
import { LinebotController } from './linebot.controller'
import { ConfigService } from './config/config.service'
import { LineHandleEvent } from './line-handler/event.handler'
import { MessageHandler } from './line-handler/message/message.handler'
import { TextHandler } from './line-handler/message/types/text.handler'
import { ImageHandler } from './line-handler/message/types/image.handler'
import { VideoHandler } from './line-handler/message/types/video.handler'
import { AudioHandler } from './line-handler/message/types/audio.handler'
import { LocationHandler } from './line-handler/message/types/location.handler'
import { StickerHandler } from './line-handler/message/types/sticker.handler'
import { PostbackHandler } from './line-handler/postback/postback.handler'
import { ContactAdminContext } from './line-handler/message/types/text-context/contact-admin.context'
import { PhotoPostBack } from './line-handler/postback/templates/photo'
import { FollowHandler } from './line-handler/follow/follow.handler'
import { SettingPostBack } from './line-handler/postback/templates/setting'
import { ArticlePostBack } from './line-handler/postback/templates/article'
import { FindArticlePostBack } from './line-handler/postback/templates/findarticle'

@Module({
  providers: [
    LinebotService,
    ConfigService,
    LineHandleEvent,
    MessageHandler,
    TextHandler,
    ImageHandler,
    VideoHandler,
    AudioHandler,
    LocationHandler,
    StickerHandler,
    PostbackHandler,
    ContactAdminContext,
    PhotoPostBack,
    SettingPostBack,
    ArticlePostBack,
    FindArticlePostBack,
    FollowHandler
  ],
  controllers: [LinebotController]
})
export class LinebotModule { }
