import {TransactionRepository} from "./transactionRepository";

export class Account {

    constructor(private transactionRepository: TransactionRepository) {
        this.transactionRepository = transactionRepository
    }

    public deposit(amount: number): void {
        this.transactionRepository.addDeposit(amount)
    }

    public withdraw(amount: number): void {
        this.transactionRepository.addWithdraw(amount)
    }

    public printStatement(): void {

    }
}