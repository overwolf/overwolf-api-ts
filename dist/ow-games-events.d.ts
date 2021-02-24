export interface IOWGamesEventsDelegate {
    onInfoUpdates(info: any): any;
    onNewEvents(e: any): any;
}
export declare class OWGamesEvents {
    private _delegate;
    private _featureRetries;
    private _requiredFeatures;
    constructor(delegate: IOWGamesEventsDelegate, requiredFeatures: string[], featureRetries?: number);
    getInfo(): Promise<any>;
    private setRequiredFeatures;
    private registerEvents;
    private unRegisterEvents;
    private onInfoUpdates;
    private onNewEvents;
    start(): Promise<void>;
    stop(): void;
}
