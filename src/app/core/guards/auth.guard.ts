import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, tap, filter, take } from 'rxjs/operators';

import { AuthState } from '../store/state/auth.store';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanLoad {
	constructor(private store: Store) { }

	canLoad(): Observable<boolean> {
		return this.checkStore().pipe(
			switchMap(() => of(true)),
			catchError(() => of(false))
		);
	}

	private checkStore(): Observable<boolean> {
		return this.store.select(AuthState.isAuthenticated).pipe(
			tap(authed => {
				if (!authed) {
					this.store.dispatch(new Navigate(['/login']));
				}
			}),
			filter(loaded => loaded),
			take(1)
		);
	}
}
