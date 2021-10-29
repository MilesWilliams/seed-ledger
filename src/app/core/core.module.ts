import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponentsModule } from './core-components/core-components.module';
import { HttpClientModule } from '@angular/common/http';
import { services } from './services';
import { resolvers } from './resolvers';
import { guards } from './guards';
import { AuthState } from './store/state/auth.store';
import { NgxsModule } from '@ngxs/store';


@NgModule({
  declarations: [],
  exports:  [CoreComponentsModule],
  providers:[
    ...guards,
    ...services,
    ...resolvers
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreComponentsModule,
    NgxsModule.forRoot([AuthState]),
  ]
})
export class CoreModule { }
