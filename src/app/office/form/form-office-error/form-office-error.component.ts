import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Office } from '../../shared/interfaces/office';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { OfficeService } from '../../shared/services/office.service';

@Component({
  selector: 'ngx-form-office-error',
  templateUrl: './form-office-error.component.html',
  styleUrls: ['./form-office-error.component.scss'],
})
export class FormOfficeErrorComponent implements OnInit {
  // liste des bureaux
  private _offices: Office[];
  // private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<any>;
  // private property to store form value
  private readonly _form: FormGroup;

  /**
   * Constructor
   * @param _officeService
   */
  constructor(private _serviceOffice: OfficeService) {
    this._submit$ = new EventEmitter<any>();
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._serviceOffice.fecth().subscribe((_: Office[]) => {
      this._offices = _;
    });
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      office: new FormControl('', Validators.compose([
        Validators.required, Validators.min(1),
      ])),
      message: new FormControl('', Validators.compose( [
          Validators.required,
      ])),
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

  get offices(): Office[] {
    return this._offices;
  }

  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<Office> {
    return this._submit$;
  }
  /**
   * Function to emit event to submit form and person
   */
  submit(error: any) {
    // this._model.size = office.size;
    // this._officeService.updateCapacity(this._model).subscribe(
    //     () => this._submit$.emit(office));
  }

}
