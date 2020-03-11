import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NbWindowService} from '@nebular/theme';
import {Office} from '../../shared/interfaces/office';
import {OfficeDetailService} from '../../shared/services/office-detail.service';
import {OfficeDetail} from '../../shared/interfaces/officeDetail';
import {DetailOfficeComponent} from '../detail-office/detail-office.component';

@Component({
    selector: 'ngx-window-office',
    templateUrl: './windows-office.component.html',
    styleUrls: ['./window-office.component.scss'],
})
export class WindowOfficeComponent implements OnInit {
    // bureau
    private _office: Office;
    // event
    private _change$: EventEmitter<boolean>;
    /**
     * constructor
     * @param windowService
     * @param serviceOfficeD
     */
    constructor(private windowService: NbWindowService,
                private serviceOfficeD: OfficeDetailService) {
        this._change$ = new EventEmitter<boolean>();
    }

    /**
     */
    ngOnInit(): void {}
    /**
     * ouvre la window
     */
    openWindow() {
        this.serviceOfficeD.fetchOne(this._office.id).subscribe((_: OfficeDetail ) => {
            const nbWindowsRef = this.windowService.open(
                DetailOfficeComponent,
                {windowClass: 'headerWindow', title:  this.name( _.office ), context: _ },
            );
            const tmpP = _.persons;
            const tmpO = _.office.size;
            nbWindowsRef.onClose.subscribe((__) => {
                // si les personnes ou la taille ne sont plus les meme alors le bureau a était modifie est il faut
                // propage les valeurs
                this.change((tmpP !== _.persons) || (tmpO !== _.office.size) );
            });
        });
    }

    /***********************************************************Event**************************************************/
    /////// stateFilter
    @Output('ChangeOffice')
    get change$() {
        return this._change$;
    }
    change(ischange: boolean) {
        this._change$.emit(ischange);
    }
    /*********************************************************GET&SETTER***********************************************/
    /////// stateFilter
    @Input()
    set office(o: Office) {
        this._office = o;
    }
    /**
     * retourn le nom du bureaux
     * @param office
     */
    name(office: Office): string {
        return  office.building + '' + office.floor + '' + office.num + '';
    }
}
