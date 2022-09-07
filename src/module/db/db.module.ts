import { Global, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Auth, AuthSchema } from './schema/auth.schema'

const MONGO_MODELS = MongooseModule.forFeature([
    {
        name: Auth.name,
        schema: AuthSchema,
        collection: 'auth'
    }
])

@Global()
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestjs'),
        MONGO_MODELS
    ],
    exports: [MONGO_MODELS]
})
export class DbModule { }
