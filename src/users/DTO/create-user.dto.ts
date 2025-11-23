import { 
    IsString,
    IsOptional,
    IsEmail,
    IsBoolean
 } from "class-validator";

 export class createUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsBoolean()
    taste?: boolean;
 }