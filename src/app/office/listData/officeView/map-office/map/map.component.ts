import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OfficeDetail} from '../../../../shared/interfaces/officeDetail';
import {DetailOfficeComponent} from '../../../../pageOffice/detail-office/detail-office.component';
import {NbWindowService} from '@nebular/theme';
import {OfficeDetailService} from '../../../../shared/services/office-detail.service';
import {Office} from '../../../../shared/interfaces/office';
import {StateFilter} from '../../../../shared/interfaces/state-filter';


@Component({
    selector: 'ngx-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})


export class MapComponent implements OnInit  {
    // etat des filtres
    private _stateFilter: StateFilter;
    // liste des bureaux
    private _offices: Office[];
    // event
    private _changeOffice$: EventEmitter<boolean>;

    /**
     * constructor
     * @param _windowService
     * @param _serviceOfficeD
     */
    constructor(private _windowService: NbWindowService,
                private _serviceOfficeD: OfficeDetailService) {
        this.offices = [];
        this._changeOffice$ = new EventEmitter<boolean>();
    }

    /**
     *
     */
    ngOnInit() {}

    /**
     * recherche les bureaux
     * @param text bureau recherche
     */
    findoffice(text: string): Office {
        let res = this._offices.filter(( _: Office) => this.createName(_).match(text) !== null);
        if (res.length < 1 ) {
            res = [{
                id: -1,
                size: 1000,
                floor: -1,
                num: 0,
                building: 'none',
                occupation: 0,
                hasStranger: false,
            } as Office,
            ];
        }
        return res.shift();
    }

    /**
     * recreer le nom du bureau
     * @param _
     */
    createName(_: Office): string {
        let res = '';
        if (_.num.toString().length === 1) {
            res = '0';
        }
        res = _.building + _.floor + res + _.num;
        return res;
    }

    /**
     * ouvre le detail des bureaux
     * @param name
     */
    openWindow(name: string) {
        if (!this._stateFilter.dateFilter) { // on ne doit pas pouvoir affiché le detaille des bureaux a une date t
            const office = this.findoffice(name);
            this._serviceOfficeD.fetchOne(office.id).subscribe(
                (_: OfficeDetail) => {
                    if (_ !== null) {
                        const nbWindowsRef = this._windowService.open(
                            DetailOfficeComponent,
                            {windowClass: 'headerWindow', title: this.createName(office), context: _},
                        );
                        // la liste des personne
                        const tmpP = _.persons;
                        // la taille du bureau
                        const tmpO = _.office.size;
                        nbWindowsRef.onClose.subscribe((__) => {
                            // si les personnes ou la taille ne sont plus les meme alors
                            // le bureau a était modifie est il faut
                            // propage les valeurs
                            this.changeOffice((tmpP !== _.persons) || (tmpO !== _.office.size));
                        });
                    }
                },
                () => undefined,
                () => undefined,
            );
        }
    }

    /**
     * filtre selon l'etage et le batiment
     * @param building
     * @param floor
     */
    filterBuildingFloor(building: string, floor: number): boolean {
        return ((floor === this._stateFilter.floor) && ( building === this._stateFilter.building)) ||
            ((this._stateFilter.floor === -1) && ( building === this._stateFilter.building)) ||
            ((this._stateFilter.floor === -1) && ( 'none' === this._stateFilter.building)) ||
            ((floor === this._stateFilter.floor) && ( 'none' === this._stateFilter.building));

    }
    /***********************************************************EVENT**************************************************/
    /////// changeOffice$
    @Output('ChangeOffice')
    get changeOffice$() {
        return this._changeOffice$;
    }

    /**
     * prpage linformation au parent
     * @param ischange
     */
    changeOffice( ischange: boolean) {
        this._changeOffice$.emit(ischange);
    }
    /********************************************************GET&SETTER************************************************/
    /////// stateFilter
    get stateFilter(): any {
        return this._stateFilter;
    }
    /////// stateOffice
    filterStateOffice(): string {
        return this._stateFilter.stateOffice;
    }
    /**
     * initialise l'etat des filtres
     * @param _
     */
    @Input()
    set stateFilter( _: any) {
        this._stateFilter = _;
    }

    /**
     * initialise les bureaux
     * @param _
     */
    @Input()
    set offices( _: Office[]) {
        this._offices = _;
    }
}
