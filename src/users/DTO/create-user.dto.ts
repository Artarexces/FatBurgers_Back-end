import { 
    IsString,
    IsOptional,
    IsEmail,
    IsEnum
 } from "class-validator";

 import { Taste } from "@prisma/client";

 export class createUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsEnum(Taste)
    taste?: Taste;
 }