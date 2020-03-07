import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
    selector: 'ngx-department-item-header',
    templateUrl: './department-item-header.component.html',
    styleUrls: ['./department-item-header.component.scss'],
})
export class DepartmentItemHeaderComponent implements OnInit {
    // definie si le on est dans la vue d'update ou non
    private _mode: string;
    // data
    private _object: string;
    // data avant modfication
    private _oldObject: string;
    // definie si on peut ou non modifie l'object
    private _canUpdate: boolean;
    // event delete
    private readonly _delete$: EventEmitter<void>;
    // event d'update
    private readonly _update$: EventEmitter<string>;

    /**
     * constructor
     */
    constructor() {
        this._canUpdate = true;
        this._mode = 'vue';
        this._delete$ = new EventEmitter<void>();
        this._update$ = new EventEmitter<string>();
    }

    /**
     * ngOnInit
     */
    ngOnInit() {
    }

    /**
     * passe en mode update
     */
    editMode(): void {
        this._mode = 'edit';
    }
    /**
     * annule la modification
     */
    cancel(): void {
        this._mode = 'vue';
    }
    /**
     * creation du message pardefaut
     */
    message() {
        return 'êtes-vous sûr de vouloir <strong>supprimer</strong> ' + this._object + ' ?';
    }
    /*********************************************************EVENT****************************************************/
    delete(): void {
        this._delete$.emit();
    }
    update(val: string): void {
        if (val.trim() !== '' && val !== this._object) {
            this._object = val;
            this._update$.emit(this._object);
            this._object = this.oldObject;
        }
        this._mode = 'vue';
    }
    // output delete
    @Output('delete')
    get delete$() {
        return this._delete$;
    }
    // output update
    @Output('update')
    get update$() {
        return this._update$;
    }
    /*******************************************************GET&SETTER*************************************************/
    /**
     * set Object
     * @param object
     */
    @Input()
    set object(object: string) {
        this._canUpdate = 'Loria' !== object;
        this._object = object;
        this._oldObject = object;
    }
    /**
     * set canUpdate
     * @param cU
     */
    @Input()
    set canUpdate(cU: boolean) {
        this._canUpdate = cU;
    }
    get oldObject(): string {
        return this._oldObject;
    }
    get canUpdate(): boolean {
        return this._canUpdate;
    }
    get object(): string {
        return this._object;
    }

    get mode(): string {
        return this._mode;
    }
}
