import { IsString, IsInt, IsPositive } from 'class-validator';

export class CreateWarehouseDto {
    @IsString()
    name: string;

    @IsInt()
    @IsPositive()
    capacity: number;
}