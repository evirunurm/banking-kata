import {Account} from "../../src/core/account";
import {TransactionRepository} from "../../src/core/transactionRepository";
import {StatementPrinter} from "../../src/core/statementPrinter";

describe("Account", () => {
    let account: Account
    let repository: TransactionRepository
    let statementPrinter: StatementPrinter

    beforeEach(() => {
        statementPrinter = new StatementPrinter()
        repository = new TransactionRepository()
        account = new Account(repository, statementPrinter)
    });

    it("should deposit money", () => {
        const addDepositSpy = jest.spyOn(repository, 'addDeposit')

        account.deposit(100)

        expect(addDepositSpy).toHaveBeenCalledWith(100)
    });

    it("should withdraw money", () => {
        const addWithdrawSpy = jest.spyOn(repository, 'addWithdraw')

        account.withdraw(100)

        expect(addWithdrawSpy).toHaveBeenCalledWith(100)
    });

    it("prints the statement", () => {
        const printStatementSpy = jest.spyOn(statementPrinter, 'print')
        const transactions = [100, -50, 200]
        repository.getAllTransactions = () => transactions

        account.printStatement()

        expect(printStatementSpy).toHaveBeenCalledWith(transactions)
    });
})