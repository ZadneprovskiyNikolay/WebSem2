import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as getenv from 'getenv';

const serverPort: number = getenv.int("PORT", 1337);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverPort);
}
bootstrap();
