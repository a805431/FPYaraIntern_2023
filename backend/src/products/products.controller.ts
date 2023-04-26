import { Controller, Post, Get, Body, Param, Delete, Patch, Query,
    NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {

    }
    
    @Get()
    listProducts() {
        return this.productsService.findAll();
    }

    @Post('/create')
    createProduct(@Body() body: CreateProductDto) {
        return this.productsService.create(body.name, body.unitSize, body.unitPrice, body.isHazardous);
    }

    @Get('/:id')
    async getProductById(@Param('id') id: string) {
        const product = await this.productsService.findOneBy(parseInt(id));

        if(!product) {
            throw new NotFoundException('No such product.');
        }
        return product;
    }

    @Get()
    getProductByName(@Query('name') name: string) {
        //similar to findAllUsers in the users.controller
        return this.productsService.find(name);
    }

    @Delete('/:id')
    removeProduct(@Param('id') id: string) {
        return this.productsService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
        return this.productsService.update(parseInt(id), body);
    }

}
