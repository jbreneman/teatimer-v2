declare interface Timer {
    seconds: number;
    label: string;
    uuid: v4String;
}

declare interface Duration {
    hours?: number;
    minutes: number;
    seconds: number;
}
