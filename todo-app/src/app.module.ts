import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//의존성 주입, 인스턴스 만든다고 생각하면 됨
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService], //여기서 주입해줘서 controller에서 AppService 사용 가능
})
export class AppModule {}
