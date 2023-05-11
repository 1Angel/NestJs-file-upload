import { Injectable } from '@nestjs/common';
import { TestEntity } from './entity/test.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestDto } from './Dto/createTest.dto';

@Injectable()
export class FileuploadService {
  constructor(
    @InjectRepository(TestEntity)
    private testRepository: Repository<TestEntity>,
  ) {}

  async create(createTestDto: CreateTestDto, file: Express.Multer.File) {
    const create = await this.testRepository.create({
      ...createTestDto,
      filetest: file.filename,
    });

    return this.testRepository.save(create);
  }
}
