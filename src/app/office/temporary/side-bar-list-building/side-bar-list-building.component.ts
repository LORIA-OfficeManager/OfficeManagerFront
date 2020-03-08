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
  batimentLoriaFloor = [
    { value: 0, label: 'RDC' },
    { value: 1, label: 'étage 1' },
    { value: 2, label: 'étage 2' },
    { value: 3, label: 'étage 3' },
    { value: 4, label: 'étage 4' },
  ];
  batimentAFloor = [
    { value: 0, label: 'RDC' },
    { value: 1, label: 'étage 1' },
    { value: 2, label: 'étage 2' },
  ];
  batimentBFloor = [
    { value: 0, label: 'RDC' },
    { value: 1, label: 'étage 1' },
    { value: 2, label: 'étage 2' },
  ];
  batimentCFloor = [
    { value: 0, label: 'RDC' },
    { value: 1, label: 'étage 1' },
    { value: 2, label: 'étage 2' },
    { value: 3, label: 'étage 3' },
    { value: 4, label: 'étage 4' },
  ];
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

  /*********************************************************GET&SETTER*************************************************/
  /////// filterfloorBatiment
  @Output('filterfloorBatiment')
  get filterfloorBatiment$() {
    return this._filterfloorBatiment$;
  }
  /**
   * emet l'evenement
   * @param floor etage
   * @param building batiment
   */
  filterfloorBatiment(floor: any, building: string) {
    this._filterfloorBatiment$.emit({floor : floor, building: building});
  }
}
