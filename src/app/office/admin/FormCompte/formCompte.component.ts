import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidatorDirective} from '../../shared/validator/custom-validator.directive';
import {UserService} from '../../shared/services/user.service';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-form-compte',
  templateUrl: './formCompte.component.html',
  styleUrls: ['./FormCompte.component.scss'],
})
export class FormCompteComponent implements OnInit {
  // private property to store form value
  private _form: FormGroup;

  /**
   * Constructor
   * @param formBuilder
   * @param _userService
   * @param toastrService
   */
  constructor(private formBuilder: FormBuilder,
              private _userService: UserService,
              private toastrService: NbToastrService) {
    this._form = this._buildForm();
  }

  ngOnInit() {
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return this.formBuilder.group({
      username: new FormControl('', Validators.compose( [
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
      role: new FormControl('user'),
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
   * Function to emit event to cancel process
   */
  cancel() {
    this._form = this._buildForm();
  }

  /**
   * Function to emit event to submit form and person
   */
  submit(user: any) {
    this._userService.createUser(user).subscribe(
        (_) =>  this.showToastSuc('success', 'bottom-end'),
        (_) =>  this.showToastErr('warning', 'bottom-end'),
    );
  }

    showToastSuc(status: NbComponentStatus, position) {
        this.toastrService.show(`L'utilisateur a été créé`,
            `Success`,
            { status, position, limit: 2});
    }
    showToastErr(status: NbComponentStatus, position) {
        this.toastrService.show(` L'utilisateur n'a pas été créé`,
            `Erreur`,
            { status, position, limit: 2});
    }
}
