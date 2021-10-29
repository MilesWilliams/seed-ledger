import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { AuthPaylod, TokenRenewal } from '../../features/dashboard/interfaces/auth.interface';

import { ApiService } from './base-api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends ApiService {

    constructor(private _http: HttpClient, private store: Store) {
        super();
        this._endpoint = 'auth'
    }

    public authenticateUser(): Observable<AuthPaylod>  {
        const now = new Date().toDateString();

        // used http://jwtbuilder.jamiekurtz.com/ to create dummy token
        const authDummy:AuthPaylod  = {
            isAuthenticated: true,
            user: {
                id:'1',
                first_name: 'Miles',
                last_name: 'Williams',
                email_address: 'miles@mail.com',
                created_date: now,
                edited_date: now
            },
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTkxMTU3MDQsImV4cCI6MTY1MDY1MTcwNCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkZpcnN0X05hbWUiOiJNaWxlcyIsIkxhc3RfTmFtZSI6IldpbGxpYW1zIiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6Ik93bmVyIn0.GIaxghCfuk17WYXoTcwsJ54QFwXqdkNReAu-ucg3c6kg4777l-bNCT-W6Y0R0q8eV3I6mDB9sKo2jnh4jgfpCA'
        }

        return of(authDummy);
    }

    public refreshToken(): Observable<TokenRenewal>  {

        // used http://jwtbuilder.jamiekurtz.com/ to create dummy token
        const token:TokenRenewal  = {
            token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTkxMTU3MDQsImV4cCI6MTY1MDY1MTcwNCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkZpcnN0X05hbWUiOiJNaWxlcyIsIkxhc3RfTmFtZSI6IldpbGxpYW1zIiwiRW1haWwiOiJqcm9ja2V0QGV4YW1wbGUuY29tIiwiUm9sZSI6Ik93bmVyIn0.GIaxghCfuk17WYXoTcwsJ54QFwXqdkNReAu-ucg3c6kg4777l-bNCT-W6Y0R0q8eV3I6mDB9sKo2jnh4jgfpCA'
        }

        return of(token);
    }
}
