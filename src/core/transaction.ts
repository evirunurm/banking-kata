export class Transaction {
    public amount: number;
    public date: string;
    public balance: number;

    constructor(amount: number, date: string, balance: number) {
        this.amount = amount;
        this.date = date;
        this.balance = balance;
    }
}