import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:19006', 'http://192.168.1.6:19000'],
  });
  await app.listen(4000, () =>
    console.log('Server listening on http:/localhost:4000'),
  );
}
bootstrap();
