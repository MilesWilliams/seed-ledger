import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { SeedsLoadedGuard } from 'src/app/core/guards/seed.guard';
import { AppRoutingResolver } from 'src/app/core/resolvers/app-routing.resolver';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent,
    resolve: [AppRoutingResolver],
    children: [
      {
        path:  'portfolio',
        loadChildren: () => import('./pages/portfolio/portfolio.module').then( m => m.PortfolioModule),

      },
      {
        path:  'seed-vault',
        loadChildren: () => import('./pages/seed-vault/seed-vault.module').then( m => m.SeedVaultModule),
        canActivate: [SeedsLoadedGuard],

      },
      {
        path:  'settings',
        loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
