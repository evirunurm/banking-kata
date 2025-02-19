import {Account} from "../../src/core/account";
import {Console} from "../../src/core/console";
import {TransactionRepository} from "../../src/core/transactionRepository";
import {StatementPrinter} from "../../src/core/statementPrinter";
import {Clock} from "../../src/core/clock";

describe("Print Statement", () => {
    let account: Account
    let repository: TransactionRepository
    let statementPrinter: StatementPrinter
    let console: Console


    beforeEach(() => {
        console = new Console()
        repository = new TransactionRepository(new Clock())
        statementPrinter = new StatementPrinter()
        account = new Account(repository, statementPrinter)
    });

    it("should print to console all deposits and withdraws made", () => {
        const consoleSpy = jest.spyOn(console, 'log')
        account.deposit(100)
        account.withdraw(50)
        account.deposit(50)
        account.deposit(100)

        account.printStatement()

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance')
        expect(consoleSpy).toHaveBeenCalledWith('19/02/2025 | 100.00 | 100.00')
        expect(consoleSpy).toHaveBeenCalledWith('19/02/2025 | -50.00 | 50.00')
        expect(consoleSpy).toHaveBeenCalledWith('19/02/2025 | 50.00 | 100.00')
        expect(consoleSpy).toHaveBeenCalledWith('19/02/2025 | 100.00 | 200.00')
    });
})