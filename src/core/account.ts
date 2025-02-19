import {TransactionRepository} from "./transactionRepository";
import {StatementPrinter} from "./statementPrinter";

export class Account {

    constructor(
        private transactionRepository: TransactionRepository,
        private statementPrinter: StatementPrinter
    ) {}

    public deposit(amount: number): void {
        this.transactionRepository.addDeposit(amount)
    }

    public withdraw(amount: number): void {
        this.transactionRepository.addWithdraw(amount)
    }

    public printStatement(): void {
        this.statementPrinter.print(this.transactionRepository.getAllTransactions())
    }
}