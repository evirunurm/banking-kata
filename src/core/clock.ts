export class Clock {
    public now(): string {
        return new Date().toDateString();
    }
}