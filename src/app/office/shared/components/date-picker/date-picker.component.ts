import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbDateService} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Office} from '../../interfaces/office';

@Component({
  selector: 'ngx-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {

  min: Date;
  max: Date;
  // private property to store model value
  private _model: any;
  // private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<any>;
  // private property to store form value
  private readonly _form: FormGroup;

  /**
   * Component constructor
   */
  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addMonth(this.dateService.today(), 0);
    this.max = this.dateService.addMonth(this.dateService.today(), 12);
    this._submit$ = new EventEmitter<any>();
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
  }

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
   * Returns private property _cancel$
   */
  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }

  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<any> {
    return this._submit$;
  }
  ngOnInit() {
  }

  /**
   * Function to emit event to cancel process
   */
  cancel() {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and person
   */
  submit(range: any) {
    range.date = Date.parse(range.date);
    this._submit$.emit(range);
  }
  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      date: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      // dateFin: new FormControl('', Validators.compose([
      //   Validators.required,
      // ])),
    },
    //     {
    //   validators: CustomValidatorDirective.timeValidator,
    //     },
    );
  }
}
