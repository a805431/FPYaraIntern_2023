import { IsString, IsInt, IsDecimal, IsBoolean } from 'class-validator';

export class CreateProductDto {

    @IsString()
    name: string;

    @IsInt()
    unitSize: number;

    @IsDecimal()
    unitPrice: number;

    @IsBoolean()
    isHazardous: boolean;

}