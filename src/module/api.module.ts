import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { DataModule } from './data/data.module'
import { LinebotModule } from './linebot/linebot.module'

@Module({
  imports: [UserModule, AuthModule, DataModule, LinebotModule],
})
export class ApiModule { }
