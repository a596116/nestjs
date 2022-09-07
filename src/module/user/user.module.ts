import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
// import { DateFormatMiddleware } from 'src/common/middleware/date-format.middleware'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
  ],
  exports: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    // .apply(DateFormatMiddleware)
    // .forRoutes({ path: 'user', method: RequestMethod.GET })
  }
}