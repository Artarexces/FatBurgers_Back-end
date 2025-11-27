import { IsOptional, IsString, IsArray, ValidateNested, IsInt, Min } from "class-validator"
import { Type } from "class-transformer"

class OrdenItemDto {
    
    @IsString()
    menuItemId: string;

    @IsInt()
    @Min(1)
    quantity: number;
}