import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './DTO/create-user.dto';

@Controller('users')
export class UsersController {
  constructor (private service: UsersService){}

  @Get()
  getAll(){
    return this.service.getAllUsers()
  }

  @Get(':email')
  getByEmail(@Param('email') email: string){
    return this.service.getByEmail(email)
  }

  @Post()
  createUser(@Body() dto: createUserDto){
    return this.service.create(dto)
  }
}
