import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
    imports: [UsersModule],
    providers: [OrdersService],
    controllers: [OrdersController]
})
export class OrdersModule {}
