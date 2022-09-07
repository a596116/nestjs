<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



# Nestjs開發網頁後端接口

## Description
使用mongodb建立資料庫，並使用Redis緩存數據

## 安裝依賴

```bash
$ pnpm install
```

## 啟動應用

```bash
# development
$ pnpm run start

# watch mode 推薦
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## 資料庫配置-Mysql

``` bash
# 開發環境 src/common/envs/development.env
# 佈署環境 src/common/envs/.env
PORT=3000
BASE_URL=http://localhost:3000

DATABASE_HOST=localhost
DATABASE_NAME=nestjs
DATABASE_USER=root
DATABASE_PASSWORD=123456
DATABASE_PORT=3306
```

## 接口文檔
http://localhost:3000/api

```ts
// src/main.ts
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
```

## License

Nest is [MIT licensed](LICENSE).
