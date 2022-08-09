import { Injectable } from '@nestjs/common';

//비지니스를 처리하는 부분
@Injectable() //이거로 의존성 주입하는 듯
export class AppService {
  getHello(): string {
    return 'AppService - getHello!';
  }
  postHello(): string {
    return 'AppService - postHello!';
  }
  putHello(): string {
    return 'AppService - putHello!';
  }
  deleteHello(): string {
    return 'AppService - deleteHello!';
  }
}
