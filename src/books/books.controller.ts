import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';



@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.booksService.findOne(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() bookDto: BookDto){
        return this.booksService.create(bookDto);    
    }
    
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: number, @Body() bookDto: BookDto) {
        return this.booksService.update(+id, bookDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.booksService.remove(+id);
    }
}
