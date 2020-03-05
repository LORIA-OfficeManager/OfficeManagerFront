import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'ngx-department-item-header',
  templateUrl: './department-item-header.component.html',
  styleUrls: ['./department-item-header.component.scss'],
})
export class DepartmentItemHeaderComponent implements OnInit {
  private _mode: string;
  private _department: string;
  private _oldDepartment: string;
  private _canUpdate: boolean;
  private readonly _delete$: EventEmitter<void>;
  private readonly _update$: EventEmitter<string>;

  constructor() {
    this._canUpdate = true;
    this._mode = 'vue';
    this._delete$ = new EventEmitter<void>();
    this._update$ = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  @Input()
  set department(department: string) {
    this._canUpdate = 'Loria' !== department;
    this._department = department;
    this._oldDepartment = department;
  }
  @Input()
  set canUpdate(cU: boolean) {
    this._canUpdate = cU;
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
      this._department = this.oldDepartment;
    }
    this._mode = 'vue';
  }

  cancel(): void {
    this._mode = 'vue';
  }

  delete(): void {
    this._delete$.emit();
  }

  message() {
    return 'êtes-vous sûr de vouloir <strong>supprimer</strong> l équipe ' + this._department + ' ?';
  }
  get oldDepartment(): string {
    return this._oldDepartment;
  }
  get canUpdate(): boolean {
    return this._canUpdate;
  }
}
