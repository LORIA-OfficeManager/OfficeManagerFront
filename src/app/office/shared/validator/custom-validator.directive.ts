import { Directive } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Directive({
  selector: '[ngxCustomValidator]',
})
export class CustomValidatorDirective {
  /**
   * email validator
   * @param control
   */
  static loriaEmail(control: FormControl) {
    // returns control
    return /^\w+\.\w+@loria\.fr$/.test(control.value) ? null : {
      loriaEmail: true,
    };
  }

  /**
   * validator qui determine s'il y a un entier dans la chaine
   * @param control
   */
  static hasNumber(control: FormControl) {
    // returns control
    return /\d/.test(control.value) ? null : {
      hasNumber: true,
    };
  }

  /**
   * Validator qui determine s'il y a une Majuscule dans la chaine
   * @param control
   */
  static hasCapital(control: FormControl) {
    // returns control
    return /[A-Z]/.test(control.value) ? null : {
      hasCapital: true,
    };
  }

  /**
   * Validator qui determine s'il y a une Minuscule dans la chaine
   * @param control
   */
  static hasMinuscule(control: FormControl) {
    // returns control
    return /[a-z]/.test(control.value) ? null : {
      hasMinuscule: true,
    };
  }

  /**
   * Validator qui determine s'il y a une caractere speciale dans la chaine
   * @param control
   */
  static hasSpecial(control: FormControl) {
    // returns control
    return /\W/.test(control.value) ? null : {
      hasSpecial: true,
    };
  }

  /**
   * Validator qui determine si les chaine sont equivalente
   * @param controlName
   * @param matchingControlName
   * @constructor
   */
  static MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
