import { Component, OnInit } from '@angular/core';
import {Office} from '../../shared/interfaces/office';
import {OfficePipePipe, StrangerPipe} from '../../shared/pipe/office-pipe.pipe';
import {OfficeService} from '../../shared/services/office.service';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'ngx-test-list-office',
  templateUrl: './list-office.component.html',
  styleUrls: ['./list-office.component.scss',
      ],
})
export class ListOfficeComponent implements OnInit {
  private _etat: string;
  private _batiment: string;
  private _nom: string;
  private _filterEtat: string;
  private _filterBatiment: any;
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
  constructor(private _officePipe: OfficePipePipe, private _officePipeStrnger: StrangerPipe,
              private _serviceOffice: OfficeService,
              private sidebarService: NbSidebarService) {
    this._serviceOffice.fecth().subscribe( (_: Office[]) => {
      this._offices = _ ;
      this._sortedData = this._offices.slice();
    });
    this._filter = 'batiment';
    this._etat = 'etat';
    this._batiment = 'batiment';
    this._nom = 'nom';
    this._filterBatiment = {
      floor : -1,
      building : 'none',
    };
    this._filterEtat = 'none';
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
    this._filterBatiment = data;
    // a ameliorer avec un pipe
    this._sortedData = this._offices.filter( (_: Office) =>
        ((_.floor === +data.floor) && ( _.building === data.building)) ||
        ((+data.floor === -1) && ( _.building === data.building)) ||
        ((+data.floor === -1) && ( 'none' === data.building)) ||
        ((_.floor === +data.floor) && ( 'none' === data.building)));
  }

  /*********************************************************GET&SETTER*************************************************/
  get sortedData(): Office[] {
    return this._sortedData;
  }
  get filter(): string {
    return this._filter;
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
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
    this._filterEtat = state;
    this._sortedData = this._offices.filter( (_: Office) =>
        this._officePipe.transform(_.size , _.occupation) === state
        || this._officePipeStrnger.transform(_.hasStrangers) === state );
  }

  get etat(): string {
    return this._etat;
  }

  get batiment(): string {
    return this._batiment;
  }
    get nom(): string {
        return this._nom;
    }
  get filterEtat(): string {
    return this._filterEtat;
  }

  get filterBatiment(): any {
    return this._filterBatiment;
  }

  refresh(data: Office[]) {
      this._sortedData = data;
  }
}


