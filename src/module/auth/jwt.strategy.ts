import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { JWT_CONSTANT } from './jwt.constant'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            // 解析用戶提交的Bearer Token Header數據
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // 加密的secret
            secretOrKey: JWT_CONSTANT.secret,
        })
    }

    async validate(payload: any) {
        return { userId: payload.id }
    }
}