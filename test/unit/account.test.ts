import {Account} from "../../src/core/account";
import {TransactionRepository} from "../../src/core/transactionRepository";

describe("Account", () => {
    let account: Account
    let repository: TransactionRepository

    beforeEach(() => {
        repository = new TransactionRepository()
        account = new Account(repository)
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
})