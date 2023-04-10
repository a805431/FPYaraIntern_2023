import { Controller, Get, Post, Body, Param, NotFoundException,
UseGuards } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dtos/create-warehouse.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('warehouses')
export class WarehousesController {
    constructor(private warehousesService: WarehousesService) {

    }

    @Get()
    listWarehouses() {
        
    }

    @Post()
    @UseGuards(AuthGuard)
    createWarehouse(@Body() body: CreateWarehouseDto) {
        return this.warehousesService.create(body);
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
