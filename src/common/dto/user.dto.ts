import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginUserDto {
    @IsEmail()
    @ApiProperty({ required: true, description: 'phone', default: 'a596116@gmail.com' })
    public phone: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'password', default: '123456' })
    public password: string
}
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'name', default: 'admin' })
    public name?: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'phone', default: '0912345678' })
    public phone: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'password', default: '123456' })
    public password: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'avatar', default: '0' })
    public avatar?: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'active', default: '1' })
    public active?: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'permissions', default: 'user' })
    public permissions?: string | any

}

export class findUserInfoDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'phone', default: '' })
    public phone: string
}

export class alterUserInfoDto {
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'id', default: '1' })
    public id: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'name', default: 'admin' })
    public name: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'phone', default: '0912345678' })
    public phone: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'password', default: '123456' })
    public password: string
}

export class alterUserPasswordDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'phone', default: '0912345678' })
    public phone: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'password', default: '111111' })
    public password: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ required: true, description: 'newPassword', default: '222222' })
    public newPassword: string
}