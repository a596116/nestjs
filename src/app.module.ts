import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { getEnvPath } from './common/helper/env.helper'
import { ApiModule } from './module/api.module'
// import { Log4jsModule } from '@nestx-log4js/core'
// import { RedisModule } from '@liaoliaots/nestjs-redis'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import configs from './config/index'

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`)
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    ConfigModule.forRoot({ load: configs, isGlobal: true }),
    // Log4jsModule.forRoot(),
    /**
     * Redis配置
     * @date 2022-08-31
     */
    // RedisModule.forRoot({
    //   config: {
    //     host: 'localhost',
    //     port: 6379,
    //     password: '123456',
    //     namespace: 'haodai'
    //   }
    // }, true),
    /**
     * 靜態文件
     * @date 2022-08-31
     */
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/upload'),
    }),
    ApiModule,
  ],
})
export class AppModule { }
