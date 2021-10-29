import { SLUser } from "./user.interface";

export interface AuthLogin {
    email_address: string;
    password: string;
}

export interface AuthPaylod {
    isAuthenticated: boolean
    token: string;
    user:SLUser
}

export interface TokenRenewal {
    token: string;
}