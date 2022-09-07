import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { IResponse } from 'src/common/interface/response.interface'
import { Role } from '../role/role.decorator'
import { findUserInfoDto } from '../../common/dto/user.dto'
import { UserService } from './user.service'
import { TransformInterceptor } from 'src/common/interception/transform.interception'

@ApiTags('用戶模塊')
@Controller('user')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class UserController {
    @Inject(UserService)
    private readonly service: UserService

    @Get()
    @ApiOperation({
        summary: "查尋所有用戶"
    })
    // @UseInterceptors(TransformInterceptor) //格式化日期
    findAll() {
        return this.service.getAllUser()
    }


    @Get('info')
    @ApiOperation({
        summary: "獲取用戶訊息(使用手機號)"
    })
    async getUserInfo(@Query() phone: findUserInfoDto): Promise<IResponse> {
        return await this.service.getUserInfo(phone.phone)
    }
}