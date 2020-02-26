import { Directive } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
@Directive({
  selector: '[ngxCustomValidator]',
})
export class CustomValidatorDirective {
  // Not working
  static timeValidator(formGroupValues: FormGroup): any {
    if (formGroupValues.value !== undefined) {
      const deb = Date.parse(formGroupValues.value.dateDeb);
      const fin = Date.parse(formGroupValues.value.dateFin);
      return deb < fin ? null :  {mismatch: true};
    } else {
      return null;
    }
  }

  static loriaEmail(control: FormControl) {
    // returns control
    return /^\w+\.\w+@loria\.fr$/.test(control.value) ? null : {
      loriaEmail: true,
    };
  }
  static hasNumber(control: FormControl) {
    // returns control
    return /\d/.test(control.value) ? null : {
      hasNumber: true,
    };
  }
  static hasCapital(control: FormControl) {
    // returns control
    return /[A-Z]/.test(control.value) ? null : {
      hasCapital: true,
    };
  }
  static hasMinuscule(control: FormControl) {
    // returns control
    return /[a-z]/.test(control.value) ? null : {
      hasMinuscule: true,
    };
  }
  static hasSpecial(control: FormControl) {
    // returns control
    return /\W/.test(control.value) ? null : {
      hasSpecial: true,
    };
  }
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
