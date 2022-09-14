import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { IResponse } from 'src/common/interface/response.interface'
import { findUserInfoDto } from '../auth/dto/find.dto'
import { UserService } from './user.service'

@ApiTags('用戶模塊')
@Controller('user')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class UserController {
    @Inject(UserService)
    private readonly service: UserService

    @Get('info')
    @ApiOperation({
        summary: "獲取用戶訊息(使用手機號)"
    })
    async getUserInfo(@Query() phone: findUserInfoDto): Promise<IResponse> {
        return await this.service.getUserInfo(phone.phone)
    }
}