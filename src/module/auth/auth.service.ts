import { Injectable, Logger } from '@nestjs/common'
import { IResponse } from 'src/common/interface/response.interface'
import { encript } from 'src/utils/Encription'
import { alterUserInfoDto, alterUserPasswordDto, CreateUserDto, LoginUserDto } from '../../common/dto/user.dto'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Auth, AuthDocument } from '../db/schema/auth.schema'
import { Model } from 'mongoose'

const svgCaptcha = require('svg-captcha')
// const logger = new Logger('auth.service')

@Injectable()
export class AuthService {
    @InjectModel(Auth.name)
    private authModel: Model<AuthDocument>

    private response: IResponse
    private pointer: number = 0
    private captchas = {}

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    /**
     * 用戶登入方法
     * @date 2022-08-26
     */
    async login(user: LoginUserDto): Promise<IResponse> {
        return await this.validateUser(user)
            .then(async (res: IResponse) => {
                if (res.code !== 20000) {
                    this.response = res
                    throw this.response
                }
                this.response = {
                    code: 20000,
                    data: {
                        token: await this.createToken(user),
                        userid: res.data.userid,
                        userPhone: res.data.userPhone
                    }
                }
                return this.response
            })
            .catch(err => {
                // logger.error(err)
                return err
            })
    }

    /**
     * 用戶註冊方法
     * @date 2022-08-26
     */
    async regist(user: CreateUserDto): Promise<IResponse> {
        return this.authModel.find({ phone: user.phone })
            .then(res => {
                if (res.length) {
                    this.response = {
                        code: 40000,
                        message: "用戶帳號以註冊"
                    }
                    throw this.response
                }
            })
            .then(async () => {
                try {
                    const createUser = new this.authModel({ ...CreateUserDto })
                    Object.assign(createUser, user)
                    createUser.save()
                    this.response = {
                        code: 20000,
                        message: "用戶註冊成功"
                    }
                    return this.response
                } catch (error) {
                    this.response = {
                        code: 30000,
                        message: '用戶註冊失敗，錯誤詳情：' + error
                    }
                    throw this.response
                }
            })
            .catch(err => {
                // logger.log(`${user.name}:${err.message}`)
                return this.response
            })
    }

    /**
     * 用戶修改方法(根據phone)
     * @date 2022-08-26
     */
    async alter(user: alterUserInfoDto) {
        return this.authModel.findOne({ where: { id: user.id } })
            .then(async res => {
                if (res) {
                    return await this.validateUser(Object.assign(res, { password: user.password }))
                        .then(async res => {
                            if (res.code !== 20000) {
                                throw res
                            }
                            this.authModel.findByIdAndUpdate(user.id, { password: encript(user.password, user.name), name: user.name, phone: user.phone })
                                .exec()
                            this.response = {
                                code: 20000,
                                message: '用戶資訊修改成功'
                            }
                            return this.response
                        })
                } else {
                    this.response = {
                        code: 40000,
                        message: '無此用戶'
                    }
                    throw this.response
                }
            })
            .catch(err => {
                return err
            })
    }

    /**
     * 用戶修改密碼
     * @date 2022-08-30
     */
    async alterPassword(user: alterUserPasswordDto) {
        return await this.validateUser(user)
            .then(async (res: IResponse) => {
                if (res.code !== 20000) {
                    this.response = res
                    throw this.response
                }
                this.authModel.findByIdAndUpdate(res.data.userid, { password: encript(user.newPassword, res.data.userName) })
                    .exec()
                this.response = {
                    code: 20000,
                    message: '密碼修改成功'
                }
                return this.response
            })
            .catch(err => {
                // logger.error(err)
                return err
            })
    }

    /**
   * 用戶登入驗證
   * @date 2022-08-26
   */
    private async validateUser(user: Auth | alterUserPasswordDto | alterUserInfoDto | LoginUserDto) {
        const phone: string = user.phone
        const password: string = user.password
        return await this.userService.findOneByPhone(phone)
            .then(res => {
                if (res == null) {
                    this.response = {
                        code: 30000,
                        message: '用戶尚未註冊'
                    }
                    throw this.response
                }
                return res
            })
            .then((dbUser: any) => {
                const pass = encript(password, dbUser.name)
                if (pass === dbUser.password) {
                    return this.response = {
                        code: 20000,
                        data: { userid: dbUser.id, userPhone: dbUser.phone, userName: dbUser.name }
                    }
                } else {
                    this.response = {
                        code: 40000,
                        message: '用戶密碼錯誤'
                    }
                    throw this.response
                }
            })
            .catch(err => {
                // logger.warn(err)
                return err
            })
    }

    /**
     * 創建token
     * @date 2022-08-26
     */
    private async createToken(user: any) {
        return await this.jwtService.signAsync(user.phone)
    }


    /**
     * 產生驗證碼
     * * @date 2022-08-27
     */
    public async createCaptcha(id?: string) {
        if (id !== '-1') delete this.captchas[id]
        const c = svgCaptcha.create()
        this.captchas[this.pointer] = (c.text as string).toLowerCase()
        return this.response = {
            code: 20000,
            message: {
                id: this.pointer++,
                img: c.data
            }
        }
    }

    /**
     * 驗證碼確認
     * @date 2022-08-27
     */
    public async verification(captcha: string, id: string): Promise<IResponse> {
        return this.response = this.captchas[id] == captcha.toLowerCase() ?
            { code: 20000, message: '驗證通過' } : { code: 50000, message: '驗證碼錯誤' }
    }
}
