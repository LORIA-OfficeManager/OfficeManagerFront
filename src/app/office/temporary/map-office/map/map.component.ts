import {AfterContentChecked, ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {OfficeDetail} from '../../../shared/interfaces/officeDetail';
import {DetailOfficeComponent} from '../../detail-office/detail-office.component';
import {NbWindowService} from '@nebular/theme';
import {OfficeDetailService} from '../../../shared/services/office-detail.service';
import {Office} from "../../../shared/interfaces/office";


@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})


export class MapComponent implements OnInit  {
  private _stateFilter: any;
  private _offices: Office[];
  constructor(private windowService: NbWindowService,
              private serviceOfficeD: OfficeDetailService) {
    this.offices = [];
  }

  ngOnInit() {}
  /**
   *
   * @param _
   */
  @Input()
  set stateFilter( _: any) {
    this._stateFilter = _;
  }
  /**
   *
   * @param _
   */
  @Input()
  set offices( _: Office[]) {
    this._offices = _;
    console.log(this._offices);
  }


  findoffice(text : string): Office{
    let res =this._offices.filter(( _: Office) => this.createName(_).match(text) !== null);
    if(res.length<1){
      res = [{
        id: -1,
        size: 1000,
        floor: -1,
        num: 0,
        building: 'none',
        occupation: 0,
        hasStrangers: false,
        } as Office
      ];
    }
    return res.shift();
  }
  createName(_: Office): string {
    let res = '';
    if (_.num.toString().length === 1) {
        res = '0';
    }
    res = _.building + _.floor + res + _.num;
    return res;
  }

  openWindow(name : string) {
    const  office = this.findoffice(name);
    this.serviceOfficeD.fectOne(office.id).subscribe(
        (_: OfficeDetail) => {
          if( _ !==null ) {
            this.windowService.open(
                DetailOfficeComponent,
                {windowClass: 'headerWindow', title: this.createName(office), context: _},
            );
          }
        },
        () => undefined,
        () =>undefined,
    );
  }

  filterBuildingFloor(building: string, floor: number): boolean {
      return ((floor === this._stateFilter.floor) && ( building === this._stateFilter.building)) ||
      ((this._stateFilter.floor === -1) && ( building === this._stateFilter.building)) ||
      ((this._stateFilter.floor === -1) && ( 'none' === this._stateFilter.building)) ||
      ((floor === this._stateFilter.floor) && ( 'none' === this._stateFilter.building))

  }



  get stateFilter(): any {
    return this._stateFilter;
  }

  filterStateOffice(): string{
    return this._stateFilter.stateOffice;
  }

}
