import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { CoreState } from 'src/app/features/dashboard/store/state/core.state';
import { NgxsModule } from '@ngxs/store';
import { SeedState } from './pages/seed-vault/store/state/seed.state';
import { states } from 'src/app/features/dashboard/store/state';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { SearchBarComponent } from './components/dashboard/search-bar/search-bar.component';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, OverviewComponent, HeaderComponent, NavbarComponent, SearchBarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    NgxsStoragePluginModule.forRoot({
      key: [CoreState, SeedState]
    }),
    NgxsModule.forFeature(states),
  ]
})
export class DashboardModule { }
