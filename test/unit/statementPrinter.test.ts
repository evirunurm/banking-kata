import {StatementPrinter} from "../../src/core/statementPrinter";
import {Console} from "../../src/core/console";
import {Transaction} from "../../src/core/transaction";

describe("Statement Printer", () => {
    let statementPrinter: StatementPrinter
    let console: Console
    let consoleSpy: jest.SpyInstance

    beforeEach(() => {
        console = new Console()
        consoleSpy = jest.spyOn(console, 'log')
        statementPrinter = new StatementPrinter(console)
    });

    it("should print the header", () => {
        statementPrinter.print([])

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance')
    })

    it("should print a transaction", () => {
        const transaction = new Transaction(100, '02/04/2024')

        statementPrinter.print([transaction])

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance')
        expect(consoleSpy).toHaveBeenCalledWith('02/04/2024 | 100.00 | 100.00')
    })

    it("should print the transactions with correct total balance, in correct order", () => {
        const transactions = [
            new Transaction(100, '02/04/2024'),
            new Transaction(100, '02/04/2024'),
            new Transaction(-150, '02/04/2024'),
            new Transaction(-50, '02/04/2024')
        ]

        statementPrinter.print(transactions)

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance')
        expect(consoleSpy).toHaveBeenCalledWith('02/04/2024 | -50.00 | 0.00')
        expect(consoleSpy).toHaveBeenCalledWith('02/04/2024 | -150.00 | 50.00')
        expect(consoleSpy).toHaveBeenCalledWith('02/04/2024 | 100.00 | 200.00')
        expect(consoleSpy).toHaveBeenCalledWith('02/04/2024 | 100.00 | 100.00')
    })
})