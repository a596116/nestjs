import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { DataModule } from './data/data.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [UserModule, AuthModule, DataModule, DbModule],
})
export class ApiModule { }
