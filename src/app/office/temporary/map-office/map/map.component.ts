import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OfficeDetail} from '../../../shared/interfaces/officeDetail';
import {DetailOfficeComponent} from '../../detail-office/detail-office.component';
import {NbWindowService} from '@nebular/theme';
import {OfficeDetailService} from '../../../shared/services/office-detail.service';
import {Office} from '../../../shared/interfaces/office';


@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})


export class MapComponent implements OnInit  {
  // etat des filtres
  private _stateFilter: any;
  // liste des bureaux
  private _offices: Office[];
  //
  private _changeOffice$: EventEmitter<boolean>;

  /**
   * constructor
   * @param windowService
   * @param serviceOfficeD
   */
  constructor(private windowService: NbWindowService,
              private serviceOfficeD: OfficeDetailService) {
    this.offices = [];
    this._changeOffice$ = new EventEmitter<boolean>();
  }

  /**
   *
   */
  ngOnInit() {}

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
    // console.log('newdata');
    this._offices = _;
  }

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
    const  office = this.findoffice(name);
    this.serviceOfficeD.fetchOne(office.id).subscribe(
        (_: OfficeDetail) => {
          if ( _ !== null ) {
            const nbWindowsRef = this.windowService.open(
                DetailOfficeComponent,
                {windowClass: 'headerWindow', title: this.createName(office), context: _},
            );
            const tmp = _.persons;
            nbWindowsRef.onClose.subscribe((__) => {
              this.changeOffice(tmp !== _.persons );
            });
          }
        },
        () => undefined,
        () => undefined,
    );
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


  /*********************************************************GET&SETTER*************************************************/
  @Output('ChangeOffice')
  get changeOffice$() {
    return this._changeOffice$;
  }
  changeOffice( ischange: boolean) {
    this._changeOffice$.emit(ischange);
  }
  findIndex(office: Office): number {
    return this._offices.findIndex(( _: Office) => _.id === office.id);
  }
  get stateFilter(): any {
    return this._stateFilter;
  }

  filterStateOffice(): string {
    return this._stateFilter.stateOffice;
  }

}
