import { Clock } from "../../src/core/clock";

class TestableClock extends Clock {
    protected today = () => new Date('2025-02-19')
}

describe("Clock", () => {
    let clock: Clock

    beforeEach(() => {
        clock = new TestableClock()
    });

    it("should get date in dd/mm/yyyy format", () => {
        expect(clock.todayAsString()).toEqual('19/02/2025')
    })
})