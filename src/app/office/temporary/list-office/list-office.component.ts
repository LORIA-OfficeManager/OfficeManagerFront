import { Component, OnInit } from '@angular/core';
import {Office} from '../../shared/interfaces/office';
import {OfficePipePipe, StrangerPipe} from '../../shared/pipe/office-pipe.pipe';
import {OfficeService} from '../../shared/services/office.service';
import {NbSidebarService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';

export interface StateFilter {
  name: string;
  floor: number;
  building: string;
  stateOffice: string;
}

@Component({
  selector: 'ngx-test-list-office',
  templateUrl: './list-office.component.html',
  styleUrls: ['./list-office.component.scss',
      ],
})

export class ListOfficeComponent implements OnInit {
  // fomulaire
  form: FormGroup;
  private _etat: string;
  private _batiment: string;
  private _nom: string;
  private _stateFilter: StateFilter;
  // type de filtre
  private _filter: string;
  // liste des bureaux
  private _offices: Office[];
  private _design: string;

  /**
   * constructor
   * @param sidebarService
   * @param _officePipe
   * @param _serviceOffice
   */
  constructor(private _officePipe: OfficePipePipe, private _officePipeStrnger: StrangerPipe,
              private _serviceOffice: OfficeService,
              private sidebarService: NbSidebarService) {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this._serviceOffice.fecth().subscribe( (_: Office[]) => {
      this._offices = _ ;
    });
    this._offices = [];
    this._filter = 'batiment';
    this._design = 'tab';
    this._etat = 'etat';
    this._batiment = 'batiment';
    this._nom = 'nom';
    this._stateFilter = {
      name : '',
      floor : -1,
      building : 'none',
      stateOffice: 'none',
    };
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
    this._stateFilter.floor = data.floor;
    this._stateFilter.building = data.building;
  }

  /*********************************************************GET&SETTER*************************************************/
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
    this._stateFilter = {
      name: '',
      floor: -1,
      building: 'none',
      stateOffice: 'none',
    };
  }
  switchDesign(design: string) {
    this._design = design;
  }
  /**
   * fltre les bureaux selon l'etat
   * @param state
   */
  filterState(state) {
    this._stateFilter.stateOffice = state;
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
  onKey(event: any) {
    this._stateFilter.name = event.target.value.toLowerCase();
    if (this._stateFilter.name.length > 0) {
      this._stateFilter.building = this._stateFilter.name.charAt(0).toUpperCase();
    } else {
      this._stateFilter.building = 'none';
    }
    if (this._stateFilter.name.length > 1) {
      this._stateFilter.floor = +this._stateFilter.name.charAt(1);
    } else {
      this._stateFilter.floor = -1;
    }
  }
  get design(): string {
    return this._design;
  }
  get stateFilter(): StateFilter {
    return this._stateFilter;
  }
  get offices(): Office[] {
    return this._offices;
  }

}


