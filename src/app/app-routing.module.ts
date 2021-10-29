import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { SeedsLoadedGuard } from './core/guards/seed.guard';
import { AppRoutingResolver } from './core/resolvers/app-routing.resolver';
// import { AppRoutingResolver } from './core/resolvers/app-routing.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren:  () =>  import('./features/authentication/authentication.module').then( m  => m.AuthenticationModule),
  },
  {
    path:  'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then( m => m.DashboardModule),
    canLoad: [AuthGuard],
    resolve: [AppRoutingResolver],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
