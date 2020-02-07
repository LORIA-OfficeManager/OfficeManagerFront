import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from '../../../shared/interfaces/department';

@Component({
  selector: 'ngx-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss'],
})
export class DepartmentItemComponent implements OnInit {
  private _department: Department;
  private readonly _delete$: EventEmitter<number>;
  private readonly _update$: EventEmitter<Department>;

  private _state: string;

  constructor() {
    this._delete$ = new EventEmitter<number>();
    this._update$ = new EventEmitter<Department>();
    this._state = 'collapsed';
  }

  ngOnInit() {
  }

  @Input()
  set department(department: Department) {
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

  get department(): Department {
    return this._department;
  }

  update(val: string): void {
      this._update$.emit(this._department);
  }

  delete(): void {
    this._delete$.emit(this._department.id);
  }

  toggle(): void {
    this._state = this._state === 'expanded' ? 'collapsed' : 'expanded';
  }

  get state() {
    return this._state;
  }
}
