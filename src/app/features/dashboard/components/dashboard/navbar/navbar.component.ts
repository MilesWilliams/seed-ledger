import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { SLPage } from 'src/app/utils/helpers';
import { AppRoute } from '../../../interfaces/app-route.interface';
import { SetSelectedNavItem } from '../../../store/actions/navigation.actions';
import { CoreState } from '../../../store/state/core.state';


@Component({
  selector: 'sl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends SLPage implements OnInit, OnDestroy {

  @Select(CoreState.getNavItems) navItems$: Observable<AppRoute[]>;
  @Select(CoreState.getSelectedNavID) getSelectedNavID$: Observable<number>;

  constructor(private store: Store, private router: Router) {
    super();
  }


  ngOnInit(): void {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (e: NavigationEnd) => this.store.dispatch(new SetSelectedNavItem(e.urlAfterRedirects))
    });

    this.navItems$.subscribe({next:res=>console.log('res: ',res)})
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
