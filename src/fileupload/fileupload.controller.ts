import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { CreateTestDto } from './Dto/createTest.dto';

@Controller('fileupload')
export class FileuploadController {
  constructor(private readonly fileuploadService: FileuploadService) {}

  @Post('save')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '../files',
        filename: (req, file, cb) => {
          const extension = file.mimetype.split('/')[1];
          const fileName = `${uuidv4()}.${extension}`;

          cb(null, fileName);
        },
      }),
    }),
  )
  SaveTest(
    @UploadedFile() file: Express.Multer.File,
    @Body() createTestDto: CreateTestDto,
  ) {
    return this.fileuploadService.create(createTestDto, file);
  }
}
