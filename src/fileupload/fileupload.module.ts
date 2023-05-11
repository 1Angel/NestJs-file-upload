import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload.service';
import { FileuploadController } from './fileupload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './entity/test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestEntity])],
  controllers: [FileuploadController],
  providers: [FileuploadService],
})
export class FileuploadModule {}
