import { Injectable, Logger } from '@nestjs/common'
import { IResponse } from 'src/common/interface/response.interface'
import { encript } from 'src/utils/Encription'
import { alterUserInfoDto, alterUserPasswordDto, CreateUserDto, LoginUserDto } from './dto/user.dto'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Auth, AuthDocument } from '../db/schema/auth.schema'
import { Model } from 'mongoose'
import { error, success } from 'src/common/helper'

const svgCaptcha = require('svg-captcha')
// const logger = new Logger('auth.service')

@Injectable()
export class AuthService {
    @InjectModel(Auth.name)
    private authModel: Model<AuthDocument>

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
                    throw res
                }
                const token = await this.createToken(user)
                return success('登入成功', {
                    token,
                    userid: res.data.userid,
                    userPhone: res.data.userPhone
                })
            })
            .catch(err => {
                // logger.error(err)
                console.log(err)
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
                    throw error("用戶帳號已註冊")
                }
            })
            .then(async () => {
                try {
                    const createUser = new this.authModel({ ...CreateUserDto })
                    Object.assign(createUser, user)
                    createUser.save()
                    return success("用戶註冊成功")
                } catch (error) {
                    throw error('用戶註冊失敗，錯誤詳情：' + error)
                }
            })
            .catch(err => {
                // logger.log(`${user.name}:${err.message}`)
                return err
            })
    }

    /**
     * 用戶修改方法(根據phone)
     * @date 2022-08-26
     */
    async alter(user: alterUserInfoDto): Promise<IResponse> {
        return this.authModel.findOne({ where: { _id: user._id } })
            .then(async res => {
                if (res) {
                    return await this.validateUser(Object.assign(res, { password: user.password }))
                        .then(async res => {
                            if (res.code !== 20000) {
                                throw res
                            }
                            this.authModel.findByIdAndUpdate(user._id, { password: encript(user.password, user.name), name: user.name, phone: user.phone })
                                .exec()
                            return success('用戶資訊修改成功')
                        })
                } else {
                    throw error('無此用戶')
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
    async alterPassword(user: alterUserPasswordDto): Promise<IResponse> {
        return await this.validateUser(user)
            .then(async (res: IResponse) => {
                if (res.code !== 20000) {
                    throw res
                }
                this.authModel.findByIdAndUpdate(res.data.userid, { password: encript(user.newPassword, res.data.userName) })
                    .exec()
                return success('密碼修改成功')
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
                    throw error('用戶尚未註冊')
                }
                return res
            })
            .then((dbUser: any) => {
                const pass = encript(password, dbUser.name)
                if (pass === dbUser.password) {
                    return success('success', { userid: dbUser.id, userPhone: dbUser.phone, userName: dbUser.name })
                } else {
                    throw error('用戶密碼錯誤')
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
    public async createCaptcha(id?: string): Promise<IResponse> {
        if (id !== '-1') delete this.captchas[id]
        const c = svgCaptcha.create()
        this.captchas[this.pointer] = (c.text as string).toLowerCase()
        return success('', {
            id: this.pointer++,
            img: c.data
        })
    }

    /**
     * 驗證碼確認
     * @date 2022-08-27
     */
    public async verification(captcha: string, id: string) {
        this.captchas[id] == captcha.toLowerCase() ? success('驗證通過') : error('驗證碼錯誤')
    }
}
