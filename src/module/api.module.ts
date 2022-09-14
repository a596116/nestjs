import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { DataModule } from './data/data.module'

@Module({
  imports: [UserModule, AuthModule, DataModule],
})
export class ApiModule { }
