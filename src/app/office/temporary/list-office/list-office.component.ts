import { Component, OnInit } from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {Office} from '../../shared/interfaces/office';
import {OfficePipePipe} from '../../shared/pipe/office-pipe.pipe';
import {OfficeService} from '../../shared/services/office.service';

@Component({
  selector: 'ngx-test-list-office',
  templateUrl: './list-office.component.html',
  styleUrls: ['./list-office.component.scss',
      ],
})
export class ListOfficeComponent implements OnInit {
  // type de filtre
  private _filter: string;
  // liste des bureaux
  private _offices: Office[];
  // liste des bureaux trier
  private _sortedData: Office[];

  /**
   * constructor
   * @param sidebarService
   * @param _officePipe
   * @param _serviceOffice
   */
  constructor(private _officePipe: OfficePipePipe,
              private _serviceOffice: OfficeService) {
    this._serviceOffice.fecth().subscribe( (_: Office[]) => {
      this._offices = _ ;
      this._sortedData = this._offices.slice();
    });
    this._filter = 'batiment';
  }

  /**
   * onInit
   */
  ngOnInit(): void {
  }

  /**
   * trie les bureaux selon l'eatge et le batiment
   * @param data
   */
  filterfloorBatiment(data: any) {
    // a ameliorer avec un pipe
    this._sortedData = this._offices.filter( (_: Office) =>
        ((_.floor === +data.floor) && ( _.building === data.building)) ||
        ((+data.floor === 0) && ( _.building === data.building)) ||
        ((+data.floor === 0) && ( 'none' === data.building)) ||
        ((_.floor === +data.floor) && ( 'none' === data.building)));
  }

  /*********************************************************GET&SETTER*************************************************/
  get sortedData(): Office[] {
    return this._sortedData;
  }
  get filter(): string {
    return this._filter;
  }
  /**
   * change de filtre
   * @param filtre
   */
  switchFilter(filtre: string) {
    this._filter = filtre;
    switch (filtre) {
      case 'batiment':
        this._sortedData = this._offices;
        break;
      case 'etat':
        this._sortedData = this._offices;
        break;
      case 'nom':
        this._sortedData = this._offices;
        break;
    }
  }
  /**
   * fltre les bureaux selon l'etat
   * @param state
   */
  filterState(state) {
    this._sortedData = this._offices.filter( (_: Office) =>
        this._officePipe.transform(_.size , _.occupation) === state );
  }

}


