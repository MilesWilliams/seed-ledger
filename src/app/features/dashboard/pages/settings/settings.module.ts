import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { SeettingsRoutingModule } from './setting-routing.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SeettingsRoutingModule
  ]
})
export class SettingsModule { }
