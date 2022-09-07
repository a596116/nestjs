import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserService } from '../user/user.service'
import { UserModule } from '../user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../user/user.entity'
import { JwtModule } from '@nestjs/jwt'
import { JWT_CONSTANT } from './jwt.constant'
import { JwtStrategy } from './jwt.strategy'
import { HashPasswordMiddleware } from 'src/common/middleware/hash-password.middleware'
// import { MulterModule } from '@nestjs/platform-express'
// import { diskStorage } from 'multer'
// import { MulterHelper } from 'src/common/helper/multer.helper'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    JwtModule.register({
      secret: JWT_CONSTANT.secret
    }),
    // MulterModule.registerAsync({
    //   useFactory: () => ({
    //     storage: diskStorage({
    //       destination: MulterHelper.destination,
    //       filename: MulterHelper.filenameHandler
    //     })
    //   }),
    // })
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule implements NestModule {
  /**
   * 中間建-密碼加密
   * @date 2022-08-26
   */
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HashPasswordMiddleware)
      .forRoutes('auth/regist')
    // .apply(HashPasswordMiddleware)
    // .forRoutes('auth/alter')
  }
}
