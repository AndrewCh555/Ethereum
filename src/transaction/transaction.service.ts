import { Injectable } from '@nestjs/common';
import {FilterQuery, Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Transaction, TransactionDocument} from "./schemas/transaction.schema";
import {CreateTransactionDto} from "./dto/create-transaction.dto";

@Injectable()
export class TransactionService {
    constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}

    async getTrs(): Promise<Transaction[]> {
        return this.transactionModel.find({});
    }

    async createTransaction(dto: Transaction): Promise<Transaction> {
        const newTransaction = new this.transactionModel(dto);
        return newTransaction.save();
    }

    async getTrsByFilter(data: string): Promise<Transaction[]> {
        return this.transactionModel.find({data});
    }
}
