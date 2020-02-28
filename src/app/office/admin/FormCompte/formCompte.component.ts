import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidatorDirective} from '../../shared/validator/custom-validator.directive';

@Component({
  selector: 'ngx-form-compte',
  templateUrl: './formCompte.component.html',
  styleUrls: ['./FormCompte.component.scss'],
})
export class FormCompteComponent implements OnInit {
  // private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<any>;
  // private property to store form value
  private readonly _form: FormGroup;

  /**
   * Constructor
   * @param formBuilder
   */
  constructor(private formBuilder: FormBuilder) {
    this._submit$ = new EventEmitter<any>();
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
  }

  ngOnInit() {
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return this.formBuilder.group({
      email: new FormControl('', Validators.compose( [
        Validators.required,
        CustomValidatorDirective.loriaEmail,
      ])),
      password: new FormControl('', Validators.compose( [
        Validators.required,
        Validators.minLength(8),
        CustomValidatorDirective.hasNumber,
        CustomValidatorDirective.hasCapital,
        CustomValidatorDirective.hasMinuscule,
        CustomValidatorDirective.hasSpecial,
      ])),
      confpassword: new FormControl('', Validators.compose( [
        Validators.required,
      ])),
    }, {
      validator: CustomValidatorDirective.MustMatch('password', 'confpassword'),
    });
  }
  /********************************************************GET&SETTER**************************************************/
  /**
   * Returns private property _form
   */
  get form(): FormGroup {
    return this._form;
  }

  /**
   * Returns private property _cancel$
   */
  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }
  /**
   * Function to emit event to cancel process
   */
  cancel() {
    this._cancel$.emit();
  }

  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<any> {
    return this._submit$;
  }
  /**
   * Function to emit event to submit form and person
   */
  submit(error: any) {
    this.submit$.emit({message : error.message});
  }

}
