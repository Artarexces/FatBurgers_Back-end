import { 
    IsString,
    IsOptional,
    IsBoolean,
    Min,
    IsUrl, 
    IsInt
} from "class-validator";

export class CreateMenuItemDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsInt()
    @Min(0)
    price: number;
    
    @IsString()
    category: string;

    @IsUrl()
    @IsOptional()
    image?: string;

    @IsOptional()
    @IsBoolean()
    available?: boolean;

}