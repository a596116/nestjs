import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { TransformInterceptor } from 'src/common/interception/transform.interception'
import { BirthdayService } from './birthday.service'
import { birthdayDto } from './dto/bitrhdat.dto'

@ApiTags('birthday')
@Controller('data')
export class BirthdayController {
    @Inject(BirthdayService)
    private readonly birthdayService: BirthdayService

    /**
     * 新增
     * @date 2022-11-01
     */
    @Post('create/birthday')
    @ApiOperation({
        summary: "新增資料"
    })
    async createBirthday(@Body() obj: birthdayDto) {
        return await this.birthdayService.createBirthday(obj)
    }


    /**
     * 查詢
     * @date 2022-11-01
     */
    @Post('birthday/:page')
    @ApiOperation({
        summary: "查尋所有birthday"
    })
    @UseInterceptors(TransformInterceptor) //格式化日期
    async findAllBirthday(@Param("page") page: number, @Body() query: object) {
        return await this.birthdayService.getAllBirthday(page, query)
    }


    /**
     * 修改
     * @date 2022-11-01
     */
    @Put('birthday')
    @ApiOperation({
        summary: "修改資料"
    })
    async updateData(@Query() id: any, @Body() obj: birthdayDto) {
        return await this.birthdayService.alterData(id.id, obj)
    }


    /**
     * 刪除
     * @date 2022-11-01
     */
    @Delete('birthday')
    @ApiOperation({
        summary: "刪除資料"
    })
    async deleteData(@Query() id: any) {
        return await this.birthdayService.deleteData(id.id)
    }

}
