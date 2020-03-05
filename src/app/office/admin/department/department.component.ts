import {Component, OnInit} from '@angular/core';
import {Department} from '../../shared/interfaces/department';
import {DepartmentService} from '../../shared/services/department.service';
import {flatMap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {NbComponentStatus, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
    // liste des deppartements
    private _departments: Department[];
    // Formulaire
    private readonly _form: FormGroup;

    /**
     * Constructor
     * @param _departmentService
     * @param _toastrService
     */
    constructor(private _departmentService: DepartmentService, private _toastrService: NbToastrService) {
        this._departments = [];
        this._form = new FormGroup({
          name: new FormControl(''),
        });
    }

  ngOnInit() {
    this._departmentService.fetch().subscribe(_ => this._departments = _);

  }

  delete(id: number): void {
    this._departmentService.delete(id)
        .subscribe((_) => {
          this._departments = this._departments.filter( (__) =>  __.id !== id);
          this.showToastSuc('success', 'bottom-end', 'Le département a été supprimé');
        },
            () => this.showToastErr('warning', 'bottom-end',
                `Le département n'a pas été supprimé`),
        );
  }

  update(i: number, dep: Department): void {
    this._departmentService.update(dep).subscribe(
        (_) =>  {
          this._departments[i] = _;
          this.showToastSuc('success', 'bottom-end', 'Le département a été modifié');
          },
        () => {
          this._departmentService.fetch().subscribe((_) => this._departments = _);
          this.showToastErr('warning', 'bottom-end',
              `Le départment n'a pas été créé`);
        },
    );
  }

  create(name: String): void {
    this._form.reset();
    if (name.trim() !== '') {
      this._departmentService.create(name)
          .pipe(
              flatMap( _ => this._departmentService.fetch()),
          )
          .subscribe(
              (_) => {
                    this._departments = _;
                    this.showToastSuc('success', 'bottom-end', 'Le département a été créé');
              },
              () => this.showToastErr('warning', 'bottom-end',
                  `Le département n'a pas été créé`),
          );
    }

  }

  isEmpty(): boolean {
    return this._departments.length === 0 ;
  }

  showToastSuc(status: NbComponentStatus, position, message: string) {
    this._toastrService.show(message,
        `Succès`,
        { status, position, limit: 2});
  }
  showToastErr(status: NbComponentStatus, position, message: string) {
    this._toastrService.show(message,
        `Erreur`,
        { status, position, limit: 2});
  }
  /*********************************************************GET&SETTER*************************************************/
  get departments(): Department[] {
      return this._departments;
  }

    get form() {
        return this._form;
    }

    get formValue() {
        return this._form.get('name').value;
    }
}
