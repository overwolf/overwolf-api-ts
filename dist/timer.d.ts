export interface TimerDelegate {
    onTimer(id?: string): void;
}
export declare class Timer {
    private _timerId;
    private _id;
    private _delegate;
    static wait(intervalInMS: number): Promise<void>;
    constructor(delegate: TimerDelegate, id?: string);
    start(intervalInMS: number): void;
    stop(): void;
    private handleTimerEvent;
}
