import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createUserDto } from './DTO/create-user.dto';

@Injectable()
export class UsersService {
     constructor(private prisma: PrismaService) {}
 
   async getAllUsers(){
        return this.prisma.user.findMany()
    }

    async findByEmail(email: string){
        return this.prisma.user.findUnique({ where : {email} })
    }

    async create(data: createUserDto){
        return this.prisma.user.create({ data })
    }

    async ensureUpsertByEmail(data: createUserDto){
        return this.prisma.user.upsert({
            where: {email: data.email},
            update: {
                name: data.name,
                taste: data.taste,
            },
            create: {
                name: data.name,
                email: data.email,
                taste: data.taste
            }
        })
    }
}
