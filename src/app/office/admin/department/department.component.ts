import {Component, OnInit} from '@angular/core';
import {Department} from '../../shared/interfaces/department';
import {DepartmentService} from '../../shared/services/department.service';
import {flatMap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  private _departments: Department[];

  private _form: FormGroup;

  constructor(private _departmentService: DepartmentService) {
    this._departments = [];
    this._form = new FormGroup({
      name: new FormControl(''),
    });
  }

  ngOnInit() {
    this._departmentService.fetch().subscribe(_ => this._departments = _);

  }

  get departments(): Department[] {
    return this._departments;
  }

  get form() {
    return this._form;
  }

  get formValue() {
    return this._form.get('name').value;
  }

  delete(id: number): void {

    this._departmentService.delete(id)
        .pipe(
            flatMap( _ => this._departmentService.fetch()),
        )
        .subscribe(_ => this._departments = _ );
  }

  update(dep: Department): void {
    this._departmentService.update(dep)
        .pipe(
            flatMap( _ => this._departmentService.fetch()),
        )
        .subscribe(_ => this._departments = _ );
  }

  create(name: String): void {
    this._form.reset();
    if (name.trim() !== '') {
      this._departmentService.create(name)
          .pipe(
              flatMap( _ => this._departmentService.fetch()),
          )
          .subscribe(_ => this._departments = _ );
    }

  }

  isEmpty(): boolean {
    return this._departments.length === 0 ;
  }


}
