import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMenuItemDto } from './DTO/create-menu-item.dto';
import { UpdateMenuItemtDto } from './DTO/update-menu-item.dto';

@Injectable()
export class MenuService {
    constructor(private prisma: PrismaService){}

    async listAll(){
        return this.prisma.menuItem.findMany({ orderBy: { createdAt: 'desc'} })
    }

    async listAvailable(){
        return this.prisma.menuItem.findMany({ where: { available: true } })
    }


    async getById(id: string){
        const item = await this.prisma.menuItem.findUnique({ where: { id } })
        if(!item) throw new NotFoundException('Item no encontrado')
            return item;
    }

    async create(dto: CreateMenuItemDto){
        return this.prisma.menuItem.create({ data: dto })
    }

    async update(id: string, dto: UpdateMenuItemtDto){
        await this.getById(id)
        return this.prisma.menuItem.update({ where: { id }, data: dto })
    }

    async remove(id: string){
        await this.getById(id)
        await this.prisma.menuItem.remove({ where: { id } })
        return { success: true }
    }
}
