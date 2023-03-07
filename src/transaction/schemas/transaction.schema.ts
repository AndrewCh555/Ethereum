import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({required: true})
  block_number: number;

  @Prop()
  transaction_id: string;

  @Prop()
  sender_address: string;

  @Prop()
  recipient_address: string;

  @Prop()
  block_confirm: number;

  @Prop()
  date: string;

  @Prop()
  value: number;

  @Prop()
  transaction_fee: number;

}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
