import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsMobilePhone, IsNotEmpty, IsString, Validate } from 'class-validator'
import { IsConfirmRule } from 'src/common/validate/is-confirm.rule'
import { IsNotExistsRule } from 'src/common/validate/is-not-exists.rule'
export class findUserInfoDto {
    @IsMobilePhone('zh-TW', {}, { message: '手機號碼格式錯誤' })
    @IsNotEmpty({ message: '手機號碼不能為空' })
    @ApiProperty({ required: true, description: 'phone', default: '0911111111' })
    public phone: string
}
