import {Account} from "../../src/core/account";
import {Console} from "../../src/core/console";
import {TransactionRepository} from "../../src/core/transactionRepository";

describe("Print Statement", () => {
    let account: Account
    let console: Console
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        console = new Console()
        consoleSpy = jest.spyOn(console, 'log')
        account = new Account(new TransactionRepository())
    });

    it("should print to console all deposits and withdraws made", () => {
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