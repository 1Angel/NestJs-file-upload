import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileuploadModule } from './fileupload/fileupload.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FileuploadModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: '',
      username: '',
      password: '',
      database: '',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
