import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //라우팅 @Controller('hello')하면 localhost:4000/hello로 라우팅
export class AppController {
  constructor(private readonly appService: AppService) {} //비지니스 로직 처리

  @Get() //http 메소드 다루는 곳, @nestjs.common에 있음
  getHello(): string {
    return this.appService.getHello();
  }

  @Post() //http 메소드 다루는 곳, @nestjs.common에 있음
  postHello(): string {
    return this.appService.postHello();
  }

  @Put() //http 메소드 다루는 곳, @nestjs.common에 있음
  putHello(): string {
    return this.appService.putHello();
  }

  @Delete() //http 메소드 다루는 곳, @nestjs.common에 있음
  deleteHello(): string {
    return this.appService.deleteHello();
  }
}
