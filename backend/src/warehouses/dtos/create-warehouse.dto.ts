import { IsString } from 'class-validator';

export class CreateWarehouseDto {
    @IsString()
    name: string;
}