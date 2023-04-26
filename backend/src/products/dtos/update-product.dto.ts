import { IsString, IsInt, IsDecimal, IsBoolean, IsOptional } from 'class-validator';

export class UpdateProductDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsInt()
    @IsOptional()
    unitSize: number;

    @IsDecimal()
    @IsOptional()
    unitPrice: number;

    @IsBoolean()
    @IsOptional()
    isHazardous: boolean;
}