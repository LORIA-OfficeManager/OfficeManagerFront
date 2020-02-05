import {Component, OnInit, Output} from '@angular/core';
import {Department} from '../../shared/interfaces/department';

@Component({
  selector: 'ngx-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  private _departments: Department[];

  constructor() { }

  ngOnInit() {
    this._departments = [
      {
        id : 0,
        name: 'informatique',
      },
      {
        id : 1,
        name: 'maths',
      },
    ];
  }

  get departments(): Department[] {
    return this._departments;
  }

  delete(id: number): void {

  }

  update(dep: Department): void {

  }


}
