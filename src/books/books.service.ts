import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BookDto } from './dto/book.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ){}

    async findAll(): Promise<Book[]>{
        return this.bookRepository.find();
    }

    async findOne(id: number): Promise<Book | null> {
        return this.bookRepository.findOneBy({ id });
    }

    async create(bookDto: BookDto): Promise<Book> {
        const book = this.bookRepository.create(bookDto);
        return this.bookRepository.save(book);
    }

    async update(id: number, bookDto: BookDto): Promise<Book | null>{
        const book = await this.findOne(id);
        if(!book) return null;

        Object.assign(book, bookDto);
        return this.bookRepository.save(book);
    }

    async remove(id: number): Promise<void>{
        await this.bookRepository.delete(id);
    }

}
