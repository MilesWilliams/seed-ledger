import { Platform } from "./platform.interface";

export interface Seed {
    id?: string;
    platform: Platform;
    phrase: string;
    created_date:  string;
    edited_date: string;
}