/// <reference types="@overwolf/types" />
declare type GetGameDBInfoResult = overwolf.games.GetGameDBInfoResult;
declare type RunningGameInfo = overwolf.games.RunningGameInfo;
export declare class OWGames {
    static getRunningGameInfo(): Promise<RunningGameInfo>;
    static classIdFromGameId(gameId: number): number;
    static getRecentlyPlayedGames(limit?: number): Promise<number[] | null>;
    static getGameDBInfo(gameClassId: number): Promise<GetGameDBInfoResult>;
}
export {};
