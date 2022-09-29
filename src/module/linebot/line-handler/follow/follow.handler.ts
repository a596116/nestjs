import { Injectable } from '@nestjs/common'
import { MessageEvent } from '@line/bot-sdk'
import { PrismaService } from 'src/module/prisma/prisma.service'

@Injectable()
export class FollowHandler {
  private readonly followTypes: object

  constructor(
    private prisma: PrismaService
  ) {
    this.followTypes = {
    }
  }

  async handleByEvent(event: MessageEvent): Promise<any> {
    if (event.type.toString() === 'follow') {
      await this.prisma.lineUser.create({
        data: {
          id: event.source.userId,
          callback: '',
          category: [],
          url: '',
          type: ''
        }
      })
    } else {
      await this.prisma.lineUser.delete({ where: { id: event.source.userId } }).catch(e => true)
    }
  }
}
