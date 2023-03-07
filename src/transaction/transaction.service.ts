import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {Transaction, TransactionDocument} from "./schemas/transaction.schema";


@Injectable()
export class TransactionService {
    constructor(@InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>) {}

    async getTrs(): Promise<Transaction[]> {
        return this.transactionModel.find()
                    .limit(5);
    }

    async getOne(block_number: number): Promise<Transaction> {
        const doc = await this.transactionModel.findOne({block_number});
        return doc;
    }

    async validateTransaction(block_number: number): Promise<Transaction| null> {
    const transaction = await this.getOne(block_number);
    if (!transaction) {
        return null;
    }
    return transaction;
    }

    async createTransaction(dto: Transaction): Promise<Transaction> {
        const newTransaction = new this.transactionModel(dto);
        return newTransaction.save();
    }

    async getTrsByFilter(data: string): Promise<Transaction[]> {
        return this.transactionModel.find({data});
    }
}
