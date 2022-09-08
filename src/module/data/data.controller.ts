import { Controller, Get, Inject, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
// import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserService } from '../user/user.service'
import { DataService } from './data.service'

@ApiTags('data')
@Controller('data')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class DataController {
    @Inject(DataService)
    private readonly dataService: DataService

    @Get('user/:page')
    @ApiOperation({
        summary: "查尋所有用戶"
    })
    // @UseInterceptors(TransformInterceptor) //格式化日期
    findAll(@Param("page") page: number) {
        return this.dataService.getAllUser(page)
    }

    // @Post('upload/avatar/:id')
    // @ApiOperation({
    //     summary: "用戶修改頭像"
    // })
    // @UseInterceptors(FileInterceptor('avatar'))
    // async upload(@UploadedFile() file: Express.Multer.File, @Param() { id }) {
    //     return await this.dataService.alterUserAvatar(id, file.filename)
    //         .then(res => {
    //             return res.code === 20000 ? res : false
    //         })
    // }
}
