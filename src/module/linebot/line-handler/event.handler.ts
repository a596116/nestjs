import { Injectable } from '@nestjs/common'
import { FollowHandler } from './follow/follow.handler'
import { MessageHandler } from './message/message.handler'
import { PostbackHandler } from './postback/postback.handler'

@Injectable()
export class LineHandleEvent {
  private readonly lineEvents: object

  constructor(
    private readonly messageHandler: MessageHandler,
    private readonly postbackHandler: PostbackHandler,
    private readonly followHandler: FollowHandler,
  ) {
    this.lineEvents = {
      message: this.messageHandler,
      follow: this.followHandler,
      unfollow: this.followHandler,
      join: 'event type -> join',
      leave: 'event type -> forleave',
      postback: this.postbackHandler,
      beacon: 'event type -> beacon'
    }
  }

  handleEvent(events: any[]): any[] {
    // if (events[0].type === 'unfollow') return
    return events.map(async event => await this.lineEvents[event.type].handleByEvent(event))
  }
}
