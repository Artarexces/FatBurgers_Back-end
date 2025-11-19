import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: process.env.NODE_ENV === 'production'
    ? ['https://fat-burgers.com']  // o tu dominio real
    : ['http://localhost:3000','http://localhost:5173'],
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀✨Server running on port ${port}`);
}
bootstrap();
