import { IsOptional, IsString, IsArray, ValidateNested, IsInt, Min, IsEnum, IsEmail } from "class-validator"
import { Type } from "class-transformer"
import { Taste } from "@prisma/client";

class UserInfoDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsEnum(Taste)
  taste?: Taste;
}

class OrderItemDto {
    
    @IsString()
    menuItemId: string;

    @IsInt()
    @Min(1)
    quantity: number;
}

class CreateOrderDto {

    @IsOptional()
    @IsString()
}