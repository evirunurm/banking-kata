import { Clock } from "../../src/core/clock";


describe("Clock", () => {
    let clock: Clock

    beforeEach(() => {
        clock = new Clock()
    });

    it("should get date in dd/mm/yyyy format", () => {
        // Faking the date to a stable value
        clock.today = jest.fn()
            .mockImplementation(() => new Date('2025-02-19'))
        expect(clock.todayAsString()).toEqual('19/02/2025')
    })
})