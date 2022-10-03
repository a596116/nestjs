import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
// import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { TransformInterceptor } from 'src/common/interception/transform.interception'
import { DataService } from './data.service'

@ApiTags('data')
@Controller('data')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class DataController {
    @Inject(DataService)
    private readonly dataService: DataService

    @Post('user/:page')
    @ApiOperation({
        summary: "查尋所有用戶"
    })
    @UseInterceptors(TransformInterceptor) //格式化日期
    async findAllUser(@Param("page") page: number, @Body() query: object) {
        return await this.dataService.getAllUser(page, query)
    }

    @Post('topic/:page')
    @ApiOperation({
        summary: "查尋所有文章"
    })
    @UseInterceptors(TransformInterceptor) //格式化日期
    async findAllTopic(@Param("page") page: number, @Body() query: object) {
        return await this.dataService.getAllTopic(page, query)
    }

    @Put(':table')
    @ApiOperation({
        summary: "修改資料"
    })
    async updateData(@Param("table") table: string, @Query() id: any, @Body() obj: object) {
        return await this.dataService.alterData(table, id.id, obj)
    }

    // @Post('upload/avatar/:id')
    // @ApiOperation({
    //     summary: "用戶修改頭像"
    // })
    // @UseInterceptors(FileInterceptor('avatar'))
    // async upload(@UploadedFile() file: Express.Multer.File, @Param() { id }) {
    //     return await this.dataService.alterUserAvatar(id, file.originalname)
    //         .then(res => {
    //             return res.code === 20000 ? res : false
    //         })
    // }

    @Post('create/:table')
    @ApiOperation({
        summary: "新增資料"
    })
    async createData(@Param('table') table: string, @Body() obj: object) {
        return await this.dataService.createData(table, obj)
    }

    @Delete(':table')
    @ApiOperation({
        summary: "刪除資料"
    })
    async deleteData(@Param('table') table: string, @Query() id: any) {
        return await this.dataService.deleteData(table, id.id)
    }

}
