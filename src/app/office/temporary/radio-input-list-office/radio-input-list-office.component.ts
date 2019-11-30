import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-test-radio-input-list-office',
  templateUrl: './radio-input-list-office.component.html',
  styleUrls: ['./radio-input-list-office.component.scss'],
})
export class RadioInputListOfficeComponent implements OnInit {
  // evenement qui permet de modifier les bureaux selon l'etage
  private _filterfloor$: EventEmitter<any>;
  // liste des etages
  options = [
    { value: '1', label: 'étage 1' },
    { value: '2', label: 'étage 2' },
    { value: '3', label: 'étage 3' },
  ];
  // etage selectione
  option;

  /**
   * constructor
   */
  constructor() {
    this._filterfloor$ = new EventEmitter<any>();
  }

  /**
   * onInit
   */
  ngOnInit() {
  }
  /**
   * emet l'evenement
   * @param floor
   */
  filterfloor(floor: any) {
    this._filterfloor$.emit(floor);
  }
  /*********************************************************GET&SETTER*************************************************/
  @Output('filterFloor')
  get filterfloor$() {
    return this._filterfloor$;
  }
}
