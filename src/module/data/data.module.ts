import { Module } from '@nestjs/common'
// import { MulterModule } from '@nestjs/platform-express'
import { TypeOrmModule } from '@nestjs/typeorm'
// import { diskStorage } from 'multer'
// import { MulterHelper } from 'src/common/helper/multer.helper'
import { User } from '../user/user.entity'
import { UserModule } from '../user/user.module'
import { DataController } from './data.controller'
import { DataService } from './data.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    // MulterModule.registerAsync({
    //   useFactory: () => ({
    //     storage: diskStorage({
    //       destination: MulterHelper.destination,
    //       filename: MulterHelper.filenameHandler
    //     })
    //   }),
    // }),
    UserModule
  ],
  controllers: [DataController],
  providers: [DataService]
})
export class DataModule { }
