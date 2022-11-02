import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsMobilePhone, IsNotEmpty, IsString, Validate } from 'class-validator'
import { IsConfirmRule } from 'src/common/validate/is-confirm.rule'
import { IsNotExistsRule } from 'src/common/validate/is-not-exists.rule'
export class birthdayDto {
    @IsNotEmpty({ message: '名字' })
    @ApiProperty({ required: true, description: 'name', default: 'haodai' })
    public name: string

    @IsNotEmpty({ message: '網址' })
    @ApiProperty({ required: true, description: 'url', default: 'haodai' })
    public url: string

    @IsNotEmpty({ message: '禮物' })
    @ApiProperty({ description: 'gift', default: 'haodai' })
    public gift?: any
}
