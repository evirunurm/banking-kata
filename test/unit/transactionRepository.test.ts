import {TransactionRepository} from "../../src/core/transactionRepository";
import {Transaction} from "../../src/core/transaction";
import { Clock } from "../../src/core/clock";

describe("Transaction Repository", () => {
    const currentDate = '19/02/2025'
    let repository: TransactionRepository
    let clock: Clock

    beforeEach(() => {
        clock = new Clock()
        repository = new TransactionRepository(clock)
        // Stubbing the clock to return a default date.
        // Important during testing, since we want to:
        // 1. Test the repository, not the clock
        // 2. Have a stable date for the test
        clock.todayAsString = () => currentDate
    });

    it("should add deposit for a given amount", () => {
        repository.addDeposit(100)

        expect(repository.getAllTransactions())
            .toEqual([new Transaction(100, currentDate)])
    })

    it ("should add withdraw", () => {
        repository.addWithdrawal(100)

        expect(repository.getAllTransactions())
            .toEqual([new Transaction(-100, currentDate)])
    })
})