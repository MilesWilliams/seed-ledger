import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';

import { Observable, of } from 'rxjs';

import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';
import { FetchSeeds } from 'src/app/features/dashboard/pages/seed-vault/store/actions/seed.actions';
import { SeedState } from 'src/app/features/dashboard/pages/seed-vault/store/state/seed.state';

@Injectable()
export class SeedsLoadedGuard implements CanActivate {
	constructor(private store: Store) {}

	canActivate(): Observable<boolean> {
		return this.checkStore().pipe(
			switchMap(() => of(true)),
			catchError(() => of(false))
		);
	}

	private checkStore(): Observable<boolean> {
		return this.store.select(SeedState.isLoading).pipe(
			tap(loaded => {
				if (!loaded) {
					this.store.dispatch(new FetchSeeds());
				}
			}),
			filter(loaded => loaded),
			take(1)
		);
	}
}