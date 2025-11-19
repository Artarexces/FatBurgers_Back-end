import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
import { CreateMenuItemDto } from './DTO/create-menu-item.dto';
import { UpdateMenuItemtDto } from './DTO/update-menu-item.dto';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Get()
    listAll() {
        return this.menuService.listAll()
    }

    @Get('available')
    listAvailable(){
        return this.menuService.listAvailable()
    }

    @Get(':id')
    getById(@Param('id') id: string){
        return this.menuService.getById(id)
    }

    @Post()
    create(@Body() dto: CreateMenuItemDto){
        return this.menuService.create(dto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateMenuItemtDto){
        return this.menuService.update(id ,dto)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.menuService.remove(id)
    }
}
