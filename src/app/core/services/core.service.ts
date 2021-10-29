import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { AppRoute } from '../../features/dashboard/interfaces/app-route.interface';
import { ApiService } from './base-api.service';

@Injectable({
    providedIn: 'root'
})
export class CoreService extends ApiService {
    private _token: string;

    constructor(private _http: HttpClient, private store: Store) {
        super();
        this._endpoint = 'navigation'
    }

    public getNavigationRoutes(): Observable<AppRoute[]> {
        // hardcoded navs till i create an admin area
        let navItems: AppRoute[] = [
            {
                id: 1,
                path: '/dashboard',
                icon: 'dashboard',
                isSelected: false,
            },
            {
                id: 2,
                path: 'portfolio',
                icon: 'portfolio',
                isSelected: false,
            },
            {
                id: 3,
                path: 'seed-vault',
                icon: 'seeds',
                isSelected: false,
            },
            {
                id: 4,
                path: 'settings',
                icon: 'settings',
                isSelected: false,
            },
        ];
        return of(navItems)
    }

}
