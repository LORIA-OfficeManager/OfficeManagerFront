import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Office} from '../../shared/interfaces/office';
import {OfficeService} from '../../shared/services/office.service';


@Component({
  selector: 'ngx-form-office',
  templateUrl: './form-office.component.html',
  styleUrls: ['./form-office.component.scss'],
})
export class FormOfficeComponent implements OnInit, OnChanges  {
  // private property to store update mode flag
  private _isUpdateMode: boolean;
  // private property to store model value
  private _model: Office;
  // private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<Office>;
  // private property to store form value
  private readonly _form: FormGroup;

  /**
   * Constructor
   * @param _officeService
   */
  constructor(private _officeService: OfficeService) {
    this._submit$ = new EventEmitter<Office>();
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to handle component update
   * @param record
   */
  ngOnChanges(record) {
    if (record.model && record.model.currentValue) {
      this._model = record.model.currentValue;
      this._isUpdateMode = true;
      this._form.patchValue(this._model);
    } else {
      this._model = {
        id: 0, // id du bureau
        size: 0, // nb de place du bureau
        floor: 0, // l'etage ou se situe le bureau
        num: 0, // le numero du bureau
        building: 'A', // le batiment ou se situe le bureau
        occupation: 0, // nombre de personne dans le bureau
        hasStranger: false, // indique s'il y a un intru
      };
      this._isUpdateMode = false;
    }
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      size: new FormControl('', Validators.compose([
        Validators.required, Validators.min(1),
      ])),
    });
  }

  /********************************************************GET&SETTER**************************************************/
  /**
   * Sets private property _model
   */
  @Input()
  set model(model: Office) {
    this._model = model;
  }

  /**
   * Returns private property _model
   */
  get model(): Office {
    return this._model;
  }

  /**
   * Returns private property _form
   */
  get form(): FormGroup {
    return this._form;
  }

  /**
   * Returns private property _isUpdateMode
   */
  get isUpdateMode(): boolean {
    return this._isUpdateMode;
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
  get submit$(): EventEmitter<Office> {
    return this._submit$;
  }
  /**
   * Function to emit event to submit form and person
   */
  submit(office: Office) {
    this._model.size = office.size;
    this._officeService.updateCapacity(this._model).subscribe(
        () => this._submit$.emit(office));
  }

}
