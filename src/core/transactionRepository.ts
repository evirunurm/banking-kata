import {Transaction} from "./transaction";
import {Clock} from "./clock";

export class TransactionRepository {
    private transactions: Transaction[] = [];

    constructor(private clock: Clock) {}

    public addDeposit(deposit: number): void {
        this.saveTransaction(deposit);
    }

    public addWithdrawal(withdraw: number): void {
        this.saveTransaction(-withdraw);
    }

    public getAllTransactions(): Transaction[] {
        return this.transactions;
    }

    private saveTransaction(amount: number): void {
        this.transactions.push(
            new Transaction(amount, this.clock.todayAsString())
        );
    }
}