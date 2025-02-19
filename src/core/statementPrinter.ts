import {Transaction} from "./transaction";
import {Console} from "./console";

export class StatementPrinter {
    private readonly separator = " | "
    private readonly header = ["Date", "Amount", "Balance"]

    constructor(private console: Console) {}

    print(transactions: Transaction[]) {
        this.printHeader()
        transactions
            .reverse()
            .reduce((balance, transaction) => {
                balance += transaction.amount
                this.printTransaction(transaction, balance)
                return balance
            }, 0)
    }

    private printTransaction(transaction: Transaction, balance: number) {
        this.console.log(
            transaction.date + this.separator +
            transaction.amount.toFixed(2) + this.separator +
            balance.toFixed(2)
        )
    }

    private printHeader() {
        this.console.log(this.header.join(this.separator))
    }
}