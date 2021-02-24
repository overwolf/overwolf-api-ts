export interface OWListenerDelegate {
}
export declare abstract class OWListener<T extends OWListenerDelegate> {
    protected _delegate: T;
    constructor(delegate: T);
    start(): void;
    abstract stop(): void;
}
