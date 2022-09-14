import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsMobilePhone, IsNotEmpty, IsString } from "class-validator"
import { IsNotExistsRule } from "src/common/validate/is-not-exists.rule"

export class RegistUserDto {
    @IsString({ message: '名稱必須為字串' })
    @IsNotEmpty({ message: '名稱不能為空' })
    @ApiProperty({ required: true, description: 'name', default: 'admin' })
    public name: string

    @IsMobilePhone('zh-TW', {}, { message: '手機號碼格式錯誤' })
    @IsNotEmpty({ message: '手機號碼不能為空' })
    @IsNotExistsRule('user', { message: '手機號碼已經註冊' })
    @ApiProperty({ required: true, description: 'phone', default: '0911111111' })
    public phone: string

    @IsString({ message: '密碼必須為字串' })
    @IsNotEmpty({ message: '密碼不能為空' })
    @ApiProperty({ required: true, description: 'password', default: '123456' })
    public password: string

    @IsNotEmpty({ message: '頭像不能為空' })
    @ApiProperty({ required: true, description: 'avatar', default: '0' })
    public avatar?: string

    @IsString({ message: '用戶狀態必須為字串' })
    @IsNotEmpty({ message: '用戶狀態不能為空' })
    @ApiProperty({ required: true, description: 'active', default: '1' })
    public active?: string

    @IsArray({ message: '用戶權限必須為陣列' })
    @IsNotEmpty({ message: '用戶權限不能為空' })
    @ApiProperty({ required: true, description: 'permissions', default: ['user', 'admin'] })
    public permissions?: string[]

}