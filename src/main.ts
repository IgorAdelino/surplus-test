import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { EnvService } from './env/services/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const envService = app.get(EnvService);
  const port = envService.get('PORT');

  await app.listen(port);
}
bootstrap();
