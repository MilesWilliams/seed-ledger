import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeedVaultComponent } from './components/seed-vault/seed-vault.component';
import { SeedVaultRoutingModule } from './seed-vault-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddSeedComponent } from './components/add-seed/add-seed.component';
import { NgxsModule } from '@ngxs/store';
import { SeedState } from './store/state/seed.state';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [SeedVaultComponent, AddSeedComponent],
  imports: [
    CommonModule,
    SeedVaultRoutingModule,
    SharedModule,
    NgxsModule.forFeature([SeedState]),
    ReactiveFormsModule,

  ]
})
export class SeedVaultModule { }
