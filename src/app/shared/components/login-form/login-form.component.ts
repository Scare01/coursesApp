import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email-validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor() {}

  loginText = "LOGIN";
  emailRe = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      emailValidator(this.emailRe),
    ]),
    password: new FormControl('', Validators.required),
  });

  onFormSubmit() {
    // do some thing
  }
}
