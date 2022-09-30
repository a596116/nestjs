import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger'
// import { Log4jsLogger } from '@nestx-log4js/core'
import { AppModule } from './app.module'
import ValidatePipe from './common/validate/validate.pipe'

// const logger = new Logger("main.ts")

/**
 * @description 主方法
 */
const bootstrap = async () => {
  const app: NestExpressApplication = await NestFactory.create(AppModule)
  const config: ConfigService = app.get(ConfigService)
  const port: number = config.get<number>('PORT')

  app.useGlobalPipes(new ValidatePipe({ whitelist: true, transform: true }))


  /**
   * 設置api網址開頭
   */
  // app.setGlobalPrefix('api')

  /**
   * 配置 Swagger
   */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('後端接口文檔')
    .setDescription('The haodai API description')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    }, 'jwt')
    .build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  const options: SwaggerCustomOptions = {
  }
  SwaggerModule.setup('api', app, document, options)

  /**
   * 跨域
   */
  app.enableCors({
    origin: '*',
  })


  /**
   * 使用Log4js 日誌框架
   */
  // app.useLogger(app.get(Log4jsLogger))
  await app.listen(port, () => {
    console.log(`${config.get<string>('BASE_URL')}/api`)
    // logger.log(`${config.get<string>('BASE_URL')}/api`)
  })
}

bootstrap()