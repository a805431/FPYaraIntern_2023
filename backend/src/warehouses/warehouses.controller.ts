import { Controller, Get, Post, Delete, Body, Param, Patch,
UseGuards, 
NotFoundException} from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dtos/create-warehouse.dto';
import { UpdateWarehouseDto } from './dtos/update-warehouse.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('warehouses')
export class WarehousesController {
    constructor(private warehousesService: WarehousesService) {
    }

    @Get()
    listWarehouses() {
        return this.warehousesService.findaAll();
    }

    @Post('/create')
    @UseGuards(AuthGuard)
    createWarehouse(@Body() body: CreateWarehouseDto) {
        return this.warehousesService.create(body.name, body.capacity, body);
    }

    @Get('/:id')
    async getWarehouseById(@Param('id') id: string) {
        const warehouse = await this.warehousesService.findOneBy(parseInt(id));

        if(!warehouse) {
            throw new NotFoundException('No such warehouse.');
        }
        return warehouse;
    }

    @Delete('/:id')
    @UseGuards(AuthGuard)
    removeWarehouse(@Param('id') id: string) {
        return this.warehousesService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateWarehouse(@Param('id') id: string, @Body() body: UpdateWarehouseDto) {
        return this.warehousesService.update(parseInt(id), body);
    }
}
