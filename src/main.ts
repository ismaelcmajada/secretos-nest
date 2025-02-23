import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar CORS para permitir solicitudes de otros orígenes
  app.enableCors({
    origin: 'http://localhost:4200', // Ajusta según el origen de tu aplicación Angular
  });
  await app.listen(3000);
}
bootstrap();
