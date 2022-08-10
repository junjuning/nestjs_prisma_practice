import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  //데이터베이스 연결
  async onModuleInit() {
    await this.$connect();
  }

  //서버연결 끊어지면 전에 데이터베이스와 끊어줌
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
