import { Body, Controller, Get, Inject, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { IResponse } from 'src/common/interface/response.interface'
import { alterUserInfoDto, alterUserPasswordDto, CreateUserDto, LoginUserDto } from '../../common/dto/user.dto'
import { AuthService } from './auth.service'

@ApiTags('用戶驗證模塊')
@Controller('auth')
export class AuthController {
    @Inject(AuthService)
    private readonly authService: AuthService

    @Post('login')
    @ApiOperation({
        summary: "用戶登入"
    })
    async loginUser(@Body() user: LoginUserDto): Promise<IResponse> {
        return await this.authService.login(user)
    }

    @Post('regist')
    @ApiOperation({
        summary: "用戶註冊"
    })
    public registUser(@Body() user: CreateUserDto): Promise<IResponse> {
        return this.authService.regist(user)
    }

    @Post('alter')
    @ApiOperation({
        summary: "用戶修改"
    })
    async alterUser(@Body() user: alterUserInfoDto): Promise<IResponse> {
        return await this.authService.alter(user)
    }

    @Post('alterPassword')
    @ApiOperation({
        summary: "用戶修改密碼"
    })
    async alterUserPassword(@Body() user: alterUserPasswordDto): Promise<IResponse> {
        return await this.authService.alterPassword(user)
    }

    @Get('captcha/:id')
    @ApiOperation({
        summary: "獲取註冊驗證碼"
    })
    async getCaptcha(@Param("id") id: string) {
        return await this.authService.createCaptcha(id)
    }

    @Post('captcha')
    @ApiOperation({
        summary: "驗證註冊驗證碼"
    })
    async verify(@Body() captcha: { captcha: string, id: string }) {
        return await this.authService.verification(captcha.captcha, captcha.id)
    }

}
