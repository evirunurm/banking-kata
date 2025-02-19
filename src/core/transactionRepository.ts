import {Transaction} from "./transaction";
import {Clock} from "./clock";

export class TransactionRepository {
    private transactions: Transaction[] = [];

    constructor(private clock: Clock) {}

    public addDeposit(deposit: number): void {
        this.transactions.push(
            new Transaction(deposit, this.clock.todayAsString())
        );
    }

    public addWithdrawal(withdraw: number): void {
        this.transactions.push(
            new Transaction(-withdraw, this.clock.todayAsString())
        );
    }

    getAllTransactions(): Transaction[] {
        return this.transactions;
    }
}