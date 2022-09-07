import { Controller, Inject, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
// import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { DataService } from './data.service'

@ApiTags('data')
@Controller('data')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
export class DataController {
    @Inject(DataService)
    private readonly authService: DataService

    // @Post('upload/avatar/:id')
    // @ApiOperation({
    //     summary: "用戶修改頭像"
    // })
    // @UseInterceptors(FileInterceptor('avatar'))
    // async upload(@UploadedFile() file: Express.Multer.File, @Param() { id }) {
    //     return await this.authService.alterUserAvatar(id, file.filename)
    //         .then(res => {
    //             return res.code === 20000 ? res : false
    //         })
    // }
}
