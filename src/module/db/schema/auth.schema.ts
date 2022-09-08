import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type AuthDocument = Auth & Document

@Schema({ timestamps: true, collection: 'discountGroups' })
export class Auth {
    @Prop()
    name: string

    @Prop()
    phone: string

    @Prop()
    password: string

    @Prop()
    avatar?: string

    @Prop()
    active?: string

    @Prop([String])
    permissions?: string[]

    @Prop()
    created_At: string

    @Prop()
    updated_At: string
}

export const AuthSchema = SchemaFactory.createForClass(Auth)