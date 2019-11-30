import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-testside-bar-list-office',
  templateUrl: './side-bar-list-building.component.html',
  styleUrls: ['./side-bar-list-building.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarListBuildingComponent implements OnInit {
  // evenement qui modifier un bureaux selon l'etage et le batiment
  private _filterfloorBatiment$: EventEmitter<any>;

  /**
   * constructor
   */
  constructor() {
    this._filterfloorBatiment$ = new EventEmitter<any>();
  }

  /**
   * onInit
   */
  ngOnInit() {
  }

  @Output('filterfloorBatiment')
  get filterfloorBatiment$() {
    return this._filterfloorBatiment$;
  }
  /*********************************************************GET&SETTER*************************************************/
  /**
   * emet l'evenement
   * @param floor etage
   * @param building batiment
   */
  filterfloorBatiment(floor: any, building: string) {
    this._filterfloorBatiment$.emit({floor : floor, building: building});
  }
}
