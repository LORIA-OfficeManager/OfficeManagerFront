import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from '../../../shared/interfaces/department';

@Component({
    selector: 'ngx-department-item',
    templateUrl: './department-item.component.html',
    styleUrls: ['./department-item.component.scss'],
})
export class DepartmentItemComponent implements OnInit {
    // departement
    private _department: Department;
    // l'ancienne valeur du departement, obligé pour résoudre le bug d'affichage
    private _oldDepartment: Department;
    // event delete
    private readonly _delete$: EventEmitter<number>;
    // event update
    private readonly _update$: EventEmitter<Department>;
    // etat lie a accordion
    private _state: string;

    /**
     * constructor
     */
    constructor() {
        this._delete$ = new EventEmitter<number>();
        this._update$ = new EventEmitter<Department>();
        this._state = 'collapsed';
    }

    /**
     * ngOnInit
     */
    ngOnInit() {
    }

    /**
     * gere la classe d'un accordionpour l'afficher ou non
     */
    toggle(): void {
        this._state = this._state === 'expanded' ? 'collapsed' : 'expanded';
    }

    /**
     * retourne si un dep a une ou des equipe
     * return boolean
     */
    depTeamsIsEmpty(): boolean {
        return !this._department.teams || this._department.teams.length < 1;
    }
    /*********************************************************EVENT****************************************************/
    @Output('update')
    get update$() {
        return this._update$;
    }
    @Output('delete')
    get delete$() {
        return this._delete$;
    }
    update(val: string): void {
        this._department.name = val;
        this._update$.emit(this._department);
        this._department.name = this._oldDepartment.name;
    }
    delete(): void {
        this._delete$.emit(this._department.id);
    }
    /*******************************************************GET&SETTER*************************************************/
    @Input()
    set department(department: Department) {
        this._department = department;
        this._oldDepartment = department;
    }

    get department(): Department {
        return this._department;
    }

    get state() {
        return this._state;
    }
}
