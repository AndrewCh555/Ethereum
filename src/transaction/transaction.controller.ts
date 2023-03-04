import {Body, Controller, Get, Post} from '@nestjs/common';
import {TransactionService} from "./transaction.service";
import {CreateTransactionDto} from "./dto/create-transaction.dto";
import {Transaction} from "./schemas/transaction.schema";
import {Query} from "mongoose";

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

    @Get()
    async getTransactions(): Promise<Transaction[]> {
        return this.transactionService.getTrs();
    }

    @Post()
    async createTransaction(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
        return this.transactionService.createTransaction(createTransactionDto);
    }

    @Get('search')
    async getTransactionsByFilter({search}: { search: string }): Promise<Transaction[]> {
        return this.transactionService.getTrsByFilter(search);
    }
}
