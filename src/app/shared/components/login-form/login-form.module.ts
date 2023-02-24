import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { EmailValidatorDirective } from '../../directives/email-validator.directive';

@NgModule({
  declarations: [LoginFormComponent, EmailValidatorDirective],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
    ],
  exports: [LoginFormComponent],
})
export class LoginFormModule { }
