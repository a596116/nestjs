import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type AuthDocument = Auth & Document

@Schema()
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

    @Prop()
    permissions?: string
}

export const AuthSchema = SchemaFactory.createForClass(Auth)