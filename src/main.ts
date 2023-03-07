import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpStatus, ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }));
    await app.listen(3000);
}
bootstrap();
