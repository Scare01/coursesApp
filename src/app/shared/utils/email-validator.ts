import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(emailRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = emailRe.test(control.value);
    return email ? {emailValidate: {value: control.value}} : null;
  };
}
