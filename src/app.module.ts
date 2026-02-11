import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres', // coloque sua senha
      database: 'books_db',
      autoLoadEntities: true,
      synchronize: true, // só para desenvolvimento
    }),
    BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
