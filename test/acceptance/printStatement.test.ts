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
    let consoleSpy: jest.SpyInstance
    let clock: Clock

    beforeEach(() => {
        console = new Console()
        clock = new Clock();
        repository = new TransactionRepository(clock)
        statementPrinter = new StatementPrinter(console)
        account = new Account(repository, statementPrinter)
        consoleSpy = jest.spyOn(console, 'log')
    });

    it("should print to console all deposits and withdraws made", () => {
        clock.todayAsString = jest.fn()
            .mockReturnValueOnce('17/02/2025')
            .mockReturnValueOnce('18/02/2025')
            .mockReturnValueOnce('19/02/2025')
            .mockReturnValueOnce('20/02/2025')

        account.deposit(100)
        account.withdraw(50)
        account.deposit(50)
        account.deposit(100)
        account.printStatement()

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance')
        expect(consoleSpy).toHaveBeenCalledWith('17/02/2025 | 100.00 | 100.00')
        expect(consoleSpy).toHaveBeenCalledWith('18/02/2025 | -50.00 | 50.00')
        expect(consoleSpy).toHaveBeenCalledWith('20/02/2025 | 100.00 | 200.00')
        expect(consoleSpy).toHaveBeenCalledWith('19/02/2025 | 50.00 | 100.00')
    });
})