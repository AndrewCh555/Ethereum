import {IsNotEmpty, IsNumber,} from 'class-validator';

export class CreateTransactionDto {
    @IsNumber()
    @IsNotEmpty()
    block_number: number;
    transaction_id: string;
    sender_address: string;
    recipient_address: string;
    block_confirm: number;
    date: string;
    value: number;
    transaction_fee: number;
}