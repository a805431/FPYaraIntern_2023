import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateWarehouseDto } from './dtos/create-warehouse.dto';

@Controller('warehouses')
export class WarehousesController {
    @Get()
    listWarehouses() {
        
    }

    @Post() 
    createWarehouse(@Body() body: CreateWarehouseDto) {
        console.log(body);
    }

    @Get('/:id')
    getWarehouseById(@Param('id') id: string) {
        const message = "12";
        if (message !== id) {
            throw new NotFoundException('Warehouse Does Not Exist');
        }
        return id;
    }
}
