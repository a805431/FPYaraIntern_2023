import { IsString, IsInt, IsDecimal, IsBoolean } from 'class-validator';

export class CreateProductDto {

    @IsString()
    name: string;

    @IsInt()
    unitsize: number;

    @IsDecimal()
    unitprice: number;

    @IsBoolean()
    ishazardous: boolean;

}