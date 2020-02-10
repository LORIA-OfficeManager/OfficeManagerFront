import { Directive } from '@angular/core';
import {FormGroup} from '@angular/forms';
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

}
