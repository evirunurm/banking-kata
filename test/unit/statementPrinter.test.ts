import {StatementPrinter} from "../../src/core/statementPrinter";
import {Console} from "../../src/core/console";
import {Transaction} from "../../src/core/transaction";

describe("Statement Printer", () => {
    let statementPrinter: StatementPrinter
    let console: Console

    beforeEach(() => {
        console = new Console()
        statementPrinter = new StatementPrinter(console)
    });

    it("should print the header", () => {
        const consoleSpy = jest.spyOn(console, 'log')

        statementPrinter.print([])

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance')
    })

    it("should print a transaction", () => {
        const consoleSpy = jest.spyOn(console, 'log')
        const transaction = new Transaction(100, '02/04/2024')

        statementPrinter.print([transaction])

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance')
        expect(consoleSpy).toHaveBeenCalledWith('02/04/2024 | 100.00 | 100.00')
    })

    it("should print the transactions with correct total balance, in reversed order", () => {
        const consoleSpy = jest.spyOn(console, 'log')
        const transactions = [
            new Transaction(100, '02/04/2024'),
            new Transaction(100, '02/04/2024'),
            new Transaction(100, '02/04/2024'),
            new Transaction(100, '02/04/2024')
        ]

        statementPrinter.print(transactions)

        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance')
        expect(consoleSpy).toHaveBeenCalledWith('02/04/2024 | 100.00 | 100.00')
    })
})