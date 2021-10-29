import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { SetNavItems, SetNavItemsFail } from '../../features/dashboard/store/actions/navigation.actions';
import { CoreService } from '../services/core.service';
import { AppRoute } from '../../features/dashboard/interfaces/app-route.interface';

@Injectable({ providedIn: 'root' })
export class AppRoutingResolver implements Resolve<AppRoute[]> {

    constructor(private service: CoreService, private store: Store) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {

        return this.service.getNavigationRoutes().pipe(
            tap(
                (res) => this.store.dispatch(new SetNavItems(res)),
                (err) => this.store.dispatch(new SetNavItemsFail(err))
            )
        );
    }
}
