import { Body, Controller, Get, Inject, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { IResponse } from 'src/common/interface/response.interface'
import { alterUserInfoDto, alterUserPasswordDto } from './dto/alter.dto'
import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport'
import { RegistUserDto } from './dto/register.dto'
import { LoginUserDto } from './dto/login.dto'

@ApiTags('用戶驗證模塊')
@Controller('auth')
export class AuthController {
    @Inject(AuthService)
    private readonly authService: AuthService

    @Post('login')
    @ApiOperation({
        summary: "用戶登入"
    })
    async loginUser(@Body() user: LoginUserDto) {
        return await this.authService.login(user)
    }

    @Post('regist')
    @ApiOperation({
        summary: "用戶註冊"
    })
    public registUser(@Body() user: RegistUserDto): Promise<IResponse> {
        return this.authService.regist(user)
    }

    @Post('alter')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({
        summary: "用戶修改"
    })
    async alterUser(@Body() user: alterUserInfoDto): Promise<IResponse> {
        return await this.authService.alter(user)
    }

    @Post('alterPassword')
    @UseGuards(AuthGuard('jwt'))
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
