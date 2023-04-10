import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
//import { CreateProductDto } from './dtos/create-product.dto';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {

    }

    @Post()
    @UseGuards(AuthGuard)
    createProduct(@Body() body: CreateProductDto) {
        return this.productsService.create(body);
    }
}
