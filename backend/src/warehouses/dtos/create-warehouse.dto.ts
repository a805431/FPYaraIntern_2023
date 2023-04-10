import { IsString, IsInt, IsPositive, IsOptional } from 'class-validator';

export class CreateWarehouseDto {
    @IsString()
    name: string;

    @IsInt()
    @IsPositive()
    capacity: number;

    @IsInt()
    @IsOptional()
    state?: number;
}