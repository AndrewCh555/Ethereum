import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [TransactionModule, MongooseModule.forRoot(
      'mongodb+srv://root:password123A@cluster0.l4bpyb6.mongodb.net/users',
  ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
