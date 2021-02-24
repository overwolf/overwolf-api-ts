/// <reference types="@overwolf/types" />
declare type GetWindowStateResult = overwolf.windows.GetWindowStateResult;
declare type OwWindowInfo = overwolf.windows.WindowInfo;
export declare class OWWindow {
    private _name;
    private _id;
    constructor(name?: string | null);
    restore(): Promise<void>;
    minimize(): Promise<void>;
    maximize(): Promise<void>;
    hide(): Promise<void>;
    close(): Promise<unknown>;
    dragMove(elem: HTMLElement): void;
    getWindowState(): Promise<GetWindowStateResult>;
    static getCurrentInfo(): Promise<OwWindowInfo>;
    private obtain;
    private assureObtained;
    private internalClose;
}
export {};
