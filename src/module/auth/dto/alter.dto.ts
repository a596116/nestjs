import { ApiProperty } from "@nestjs/swagger"
import { IsMobilePhone, IsNotEmpty, IsString } from "class-validator"

export class alterUserInfoDto {
    @IsNotEmpty({ message: 'id不能為空' })
    @ApiProperty({ required: true, description: 'id', default: '1' })
    public id: string

    @IsString({ message: '名稱必須為字串' })
    @IsNotEmpty({ message: '名稱不能為空' })
    @ApiProperty({ required: true, description: 'name', default: 'admin' })
    public name: string

    @IsMobilePhone('zh-TW', {}, { message: '手機號碼格式錯誤' })
    @IsNotEmpty({ message: '手機號碼不能為空' })
    @ApiProperty({ required: true, description: 'phone', default: '0911111111' })
    public phone: string

    @IsString({ message: '密碼必須為字串' })
    @IsNotEmpty({ message: '密碼不能為空' })
    @ApiProperty({ required: true, description: 'password', default: '123456' })
    public password: string

    @IsString({ message: '頭像必須為字串' })
    @IsNotEmpty({ message: '頭像不能為空' })
    @ApiProperty({
        required: true, description: 'avatar', default: 'https://upload.cc/i1/2022/09/21/tFJkfi.png'
    })
    public avatar: string
}


export class alterUserPasswordDto {
    @IsMobilePhone('zh-TW', {}, { message: '手機號碼格式錯誤' })
    @IsNotEmpty({ message: '手機號碼不能為空' })
    @ApiProperty({ required: true, description: 'phone', default: '0912345678' })
    public phone: string

    @IsString({ message: '密碼必須為字串' })
    @IsNotEmpty({ message: '密碼不能為空' })
    @ApiProperty({ required: true, description: 'password', default: '111111' })
    public password: string

    @IsString({ message: '密碼必須為字串' })
    @IsNotEmpty({ message: '密碼不能為空' })
    @ApiProperty({ required: true, description: 'newPassword', default: '222222' })
    public newPassword: string
}