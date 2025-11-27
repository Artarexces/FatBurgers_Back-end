import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class OrdersService {
    constructor (
        private prisma: PrismaService,
        private UserService:  UsersService
    ) {}

    async getAllOrders(){
        return this.prisma.order.findMany({
            include: {
                user: true,
                items: true,
            }
        });
    }
}
