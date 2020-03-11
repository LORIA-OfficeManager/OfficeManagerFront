import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'ngx-radio-input-etat-list-office',
    templateUrl: './radio-input-etat-list-office.component.html',
    styleUrls: ['./radio-input-etat-list-office.component.scss'],
})
export class RadioInputEtatListOfficeComponent implements OnInit {
    // evenement declencher pour modifier le filtre
    private _filterState$: EventEmitter<any>;
    // liste des etat possible des bureaus
    private _options = [
        { value: 'emptyOffice', label: 'Vide' },
        { value: 'notFullOffice', label: 'Non vide' },
        { value: 'fullOffice', label: 'Plein' },
        { value: 'moreThanFullOffice', label: 'Surpeuplé' },
        { value: 'StrangerOffice', label: 'Intrus' },
    ];
    // etat selectionz
    option;

    /**
     * constructor
     */
    constructor() {
        this._filterState$ = new EventEmitter<any>();
    }

    /**
     */
    ngOnInit() {}

    /***********************************************************Event**************************************************/
    /////// filterState
    @Output('filterState')
    get filterState$() {
        return this._filterState$;
    }
    /**
     * emet l'evenement pour modifier les datas
     * @param state etat a renvoye
     */
    filterState(state: string) {
        this._filterState$.emit(state);
    }
    /*********************************************************GET&SETTER***********************************************/
    /////// options
    /**
     * retourne la liste des etats
     */
    get options(): ({ label: string; value: string } | { label: string; value: string } |
        { label: string; value: string } | { label: string; value: string } | { label: string; value: string })[] {
        return this._options;
    }
}
