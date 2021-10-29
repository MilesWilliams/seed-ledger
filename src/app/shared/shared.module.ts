import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlIconComponent } from './elements/sl-icon/sl-icon.component';
import { ListWidgetComponent } from './elements/list-widget/list-widget.component';
import { PageComponent } from './templates/page/page.component';
import { ButtonComponent } from './elements/button/button.component';
import { PageSectionComponent } from './templates/page-section/page-section.component';
import { ModalComponent } from './elements/modal/modal.component';



@NgModule({
  declarations: [
    SlIconComponent,
    ListWidgetComponent,
    PageComponent,
    ButtonComponent,
    PageSectionComponent,
    ModalComponent
  ],
  exports: [
    SlIconComponent,
    ListWidgetComponent,
    PageComponent,
    ButtonComponent,
    PageSectionComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
