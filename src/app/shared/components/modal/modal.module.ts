import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ButtonModule } from '../button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FontAwesomeModule,
  ],
  exports: [ModalComponent],
})
export class ModalModule { }
