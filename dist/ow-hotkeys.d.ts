/// <reference types="@overwolf/types" />
export declare class OWHotkeys {
    private constructor();
    static getHotkeyText(hotkeyId: string, gameId?: number): Promise<string>;
    static onHotkeyDown(hotkeyId: string, action: (hotkeyResult: overwolf.settings.hotkeys.OnPressedEvent) => void): void;
}
