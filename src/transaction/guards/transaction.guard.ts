import {Injectable, CanActivate, ExecutionContext, UnauthorizedException} from '@nestjs/common';
import { Observable } from 'rxjs';
import {TransactionService} from "../transaction.service";

@Injectable()
export class TransactionGuard implements CanActivate {
    constructor(private transactionService: TransactionService) {
    }

    async canActivate(
        context: ExecutionContext,
        // @ts-ignore
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const {block_number} = request.body;
        const transactionReq = await this.transactionService.validateTransaction(block_number)
        if (transactionReq) {
            throw new UnauthorizedException(
                `Transaction ${block_number} exist`,
            );
        }
        return true;
    }
}