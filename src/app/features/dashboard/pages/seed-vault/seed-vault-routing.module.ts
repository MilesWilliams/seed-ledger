import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeedVaultComponent } from './components/seed-vault/seed-vault.component';

const routes: Routes = [
    {
        path: '',
        component: SeedVaultComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeedVaultRoutingModule { }
