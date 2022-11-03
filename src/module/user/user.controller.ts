import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { TransformInterceptor } from 'src/common/interception/transform.interception'
import { IResponse } from 'src/common/interface/response.interface'
import { findUserInfoDto } from '../auth/dto/find.dto'
import { UserService } from './user.service'

@ApiTags('用戶模塊')
@Controller('data')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class UserController {
    @Inject(UserService)
    private readonly service: UserService

    @Get('user/info')
    @ApiOperation({
        summary: "獲取用戶訊息(使用手機號)"
    })
    async getUserInfo(@Query() phone: findUserInfoDto): Promise<IResponse> {
        return await this.service.getUserInfo(phone.phone)
    }

    @Post('user/:page')
    @ApiOperation({
        summary: "查尋所有用戶"
    })
    @UseInterceptors(TransformInterceptor) //格式化日期
    async findAllUser(@Param("page") page: number, @Body() query: object) {
        return await this.service.getAllUser(page, query)
    }

    /**
     * 
     */
    @Put('user')
    @ApiOperation({
        summary: "修改資料"
    })
    async updateData(@Param("table") table: string, @Query() id: any, @Body() obj: object) {
        return await this.service.alterUser(table, id.id, obj)
    }
}