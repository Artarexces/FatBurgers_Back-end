import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { MenuService } from './menu/menu.service';
import { MenuController } from './menu/menu.controller';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PrismaModule, UsersModule, OrdersModule],
  controllers: [AppController, MenuController],
  providers: [AppService, MenuService],
})
export class AppModule {}
