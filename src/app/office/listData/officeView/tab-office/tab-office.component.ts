import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import {Office} from '../../../shared/interfaces/office';
import {Sort} from '@angular/material/sort';
import {StateFilter} from '../../../shared/interfaces/state-filter';

@Component({
  selector: 'ngx-tab-office',
  templateUrl: './tab-office.component.html',
  styleUrls: ['./tab-office.component.scss',
    '../../list-office/list-office.component.scss'],
})
export class TabOfficeComponent implements OnInit {
    // liste des bureaux
    private _offices: Office[];
    // filtre
    private _stateFilter: StateFilter;
    // event
    private _changeOffice$: EventEmitter<boolean>;

    /**
     * constructor
     */
    constructor() {
        this._changeOffice$ = new EventEmitter<boolean>();
    }

    /**
     * onInit
     */
    ngOnInit() {
    }

    /**
     * Trie les bureaux
     * @param sort
     */
    sortData(sort: Sort) {
        const data = this._offices.slice();
        if (!sort.active || sort.direction === '') {
            this._offices = data;
            return;
        }
        this._offices = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name':
                    let nameA = '' + a.num;
                    let nameB = '' + a.num;
                    if (a.num < 10) {
                        nameA = '0' + a.num;
                    }
                    if (b.num < 10) {
                        nameB = '0' + b.num;
                    }
                    return compare(a.floor + '' + nameA + '' + a.building ,
                        b.floor + '' + nameB + '' + b.building, isAsc);
                case 'size': return compare(a.size, b.size, isAsc);
                case 'occupation': return compare(this.people(a), this.people(b), isAsc);
                default: return 0;
            }
        });
    }

    /**********************************************************Event***************************************************/
    /////// ChangeOffice
    @Output('ChangeOffice')
    get changeOffice$() {
        return this._changeOffice$;
    }
    changeOffice(data: boolean) {
        this._changeOffice$.emit(data);
    }
    /*******************************************************GET&SETTER*************************************************/
    /////// offices
    @Input()
    set offices(sortedDara: Office[]) {
        this._offices = sortedDara;
    }
    get offices(): Office[] {
        return this._offices;
    }
    /////// stateFilter
    @Input()
    set stateFilter(stateF: StateFilter) {
        this._stateFilter = stateF;
    }

    /////// people
    /**
     * retourne les nombre de personne par office
     * @param office le bureau
     */
    people(office: Office) {
        return (office.occupation / office.size) * 100 ;
    }
    /////// name
    /**
     * retourne le nom du bureau
     * @param office
     */
    name(office: Office): string {
        return  office.building + '' + office.floor + '' + office.num ;
    }
    /////// stateFilter
    get stateFilter(): StateFilter {
        return this._stateFilter;
    }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
