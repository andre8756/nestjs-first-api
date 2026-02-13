import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'books_db',
      autoLoadEntities: true,
      synchronize: true, // só para desenvolvimento
    }),
    BooksModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
