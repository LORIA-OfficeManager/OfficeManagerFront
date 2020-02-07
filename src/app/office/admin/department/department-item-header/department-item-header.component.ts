import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from '../../../shared/interfaces/department';

@Component({
  selector: 'ngx-department-item-header',
  templateUrl: './department-item-header.component.html',
  styleUrls: ['./department-item-header.component.scss'],
})
export class DepartmentItemHeaderComponent implements OnInit {

  private _mode: string;
  private _department: string;
  private readonly _delete$: EventEmitter<void>;
  private readonly _update$: EventEmitter<string>;

  constructor() {
    this._mode = 'vue';
    this._delete$ = new EventEmitter<void>();
    this._update$ = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  @Input()
  set department(department: string) {
    this._department = department;
  }

  @Output('delete')
  get delete$() {
    return this._delete$;
  }

  @Output('update')
  get update$() {
    return this._update$;
  }

  get department(): string {
    return this._department;
  }

  get mode(): string {
    return this._mode;
  }

  editMode(): void {
    this._mode = 'edit';
  }

  update(val: string): void {
    if (val.trim() !== '' && val !== this._department) {
      this._department = val;
      this._update$.emit(this._department);
    }
    this._mode = 'vue';
  }

  cancel(): void {
    this._mode = 'vue';
  }

  delete(): void {
    this._delete$.emit();
  }

}
