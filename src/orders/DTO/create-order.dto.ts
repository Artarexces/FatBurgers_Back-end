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

export class CreateOrderDto {

  @IsOptional()
  @ValidateNested()
  @Type(() => UserInfoDto)
  user?: UserInfoDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
  
}