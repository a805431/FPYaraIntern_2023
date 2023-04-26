import { IsString, IsInt, IsPositive, IsOptional } from "class-validator";

export class UpdateWarehouseDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    capacity: number;

    @IsInt()
    @IsOptional()
    state: number;
}