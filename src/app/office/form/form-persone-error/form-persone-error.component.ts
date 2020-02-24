import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Person} from '../../shared/interfaces/person';
import { PersonService } from '../../shared/services/person.service';

@Component({
  selector: 'ngx-form-persone-error',
  templateUrl: './form-persone-error.component.html',
  styleUrls: ['./form-persone-error.component.scss'],
})
export class FormPersoneErrorComponent implements OnInit  {
  toppings = new FormControl();
// private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<any>;
  // private property to store form value
  private readonly _form: FormGroup;
  private _people: Person[];
  /**
   * Constructor
   * @param _officeService
   */
  constructor(private _peopleService: PersonService) {
    this._submit$ = new EventEmitter<any>();
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
    this._people = [];
  }

  get people(): Person[] {
    return this._people;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this._peopleService.fecth().subscribe((_: Person[]) => {
      this._people = _;
    });
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      people: new FormControl('', Validators.compose([
        Validators.required,
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
    // console.log(this._form);
    // console.log(this.toppings);
    // console.log(error);
    // this._model.size = office.size;
    // this._officeService.updateCapacity(this._model).subscribe(
    //     () => this._submit$.emit(office));
  }


}
