import {Body, Controller, Get, HttpStatus, Post, Res, UseGuards} from '@nestjs/common';
import {TransactionService} from "./transaction.service";
import {CreateTransactionDto} from "./dto/create-transaction.dto";
import {Transaction} from "./schemas/transaction.schema";
import {Response} from "express";
import {TransactionGuard} from "./guards/transaction.guard";

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) {}

    @Get()
    async getTransactions(): Promise<Transaction[]> {
        return this.transactionService.getTrs();
    }

    @UseGuards(TransactionGuard)
    @Post()
    async createTransaction(
        @Body() createTransactionDto: CreateTransactionDto,
        @Res() res: Response) {
        await this.transactionService.createTransaction(createTransactionDto);
        res.statusCode = HttpStatus.CREATED;
        return res.send('transaction saved');
    }

    @Get('search')
    async getTransactionsByFilter({search}: { search: string }): Promise<Transaction[]> {
        return this.transactionService.getTrsByFilter(search);
    }
}