import { ApiProperty } from "@nestjs/swagger"
import { IsMobilePhone, IsNotEmpty, IsString } from "class-validator"

export class LoginUserDto {
    @IsMobilePhone('zh-TW', {}, { message: '手機號碼格式錯誤' })
    @IsNotEmpty({ message: '手機號碼不能為空' })
    @ApiProperty({ required: true, description: 'phone', default: '0911111111' })
    public phone: string

    @IsString({ message: '密碼必須為字串' })
    @IsNotEmpty({ message: '密碼不能為空' })
    @ApiProperty({ required: true, description: 'password', default: '123456' })
    public password: string

}