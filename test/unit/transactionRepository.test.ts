import {TransactionRepository} from "../../src/core/transactionRepository";
import {Transaction} from "../../src/core/transaction";
import { Clock } from "../../src/core/clock";

describe("Transaction Repository", () => {
    let repository: TransactionRepository
    let clock: Clock

    beforeEach(() => {
        clock = new Clock()
        repository = new TransactionRepository(clock)
    });

    it("should add deposit for a given amount", () => {
        const transactionDate = new Date().toDateString()
        clock.now = () => new Date(transactionDate).toDateString()

        repository.addDeposit(100)

        expect(repository.getAllTransactions())
            .toEqual(
            [new Transaction(100, transactionDate, 100)]
        )
    })

    it ("should add withdraw", () => {
        const transactionDate = new Date().toDateString()
        clock.now = () => new Date(transactionDate).toDateString()

        repository.addWithdrawal(100)

        expect(repository.getAllTransactions())
            .toEqual(
                [new Transaction(-100, transactionDate, -100)]
            )
    })
})