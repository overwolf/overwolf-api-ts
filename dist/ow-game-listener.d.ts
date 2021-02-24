/// <reference types="@overwolf/types" />
import { OWListener, OWListenerDelegate } from "./ow-listener";
export interface OWGameListenerDelegate extends OWListenerDelegate {
    onGameStarted?(info: overwolf.games.RunningGameInfo): any;
    onGameEnded?(info: overwolf.games.RunningGameInfo): any;
}
export declare class OWGameListener extends OWListener<OWGameListenerDelegate> {
    constructor(delegate: OWGameListenerDelegate);
    start(): void;
    stop(): void;
    private onGameInfoUpdated;
    private onRunningGameInfo;
}
