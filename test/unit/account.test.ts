import {Account} from "../../src/core/account";
import {TransactionRepository} from "../../src/core/transactionRepository";
import {StatementPrinter} from "../../src/core/statementPrinter";
import {Clock} from "../../src/core/clock";
import {Transaction} from "../../src/core/transaction";

describe("Account", () => {
    let account: Account
    let repository: TransactionRepository
    let statementPrinter: StatementPrinter

    beforeEach(() => {
        statementPrinter = new StatementPrinter()
        repository = new TransactionRepository(new Clock())
        account = new Account(repository, statementPrinter)
    });

    it("should deposit money", () => {
        const addDepositSpy = jest.spyOn(repository, 'addDeposit')

        account.deposit(100)

        expect(addDepositSpy).toHaveBeenCalledWith(100)
    });

    it("should withdraw money", () => {
        const addWithdrawSpy = jest.spyOn(repository, 'addWithdrawal')

        account.withdraw(100)

        expect(addWithdrawSpy).toHaveBeenCalledWith(100)
    });

    it("prints the statement", () => {
        const printStatementSpy = jest.spyOn(statementPrinter, 'print')
        const transactions = [
            new Transaction(100, '2/04/2024', 100),
            new Transaction(-50, '2/04/2024', 50),
            new Transaction(-50, '2/04/2024', 0),
        ]
        repository.getAllTransactions = () => transactions

        account.printStatement()

        expect(printStatementSpy).toHaveBeenCalledWith(transactions)
    });
})