import { Module } from '@nestjs/common'
// import { MulterModule } from '@nestjs/platform-express'
// import { diskStorage } from 'multer'
// import { MulterHelper } from 'src/common/helper/multer.helper'
import { UserModule } from '../user/user.module'
import { DataController } from './data.controller'
import { DataService } from './data.service'

@Module({
  imports: [
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
