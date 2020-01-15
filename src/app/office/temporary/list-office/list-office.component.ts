import {Component, OnInit} from '@angular/core';
import {Office} from '../../shared/interfaces/office';
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
  get reload(): boolean {
    return this._reload;
  }
  // fomulaire
  form: FormGroup;
  // constante
  private _etat: string;
  private _batiment: string;
  private _nom: string;
  // etat des filtres
  private _stateFilter: StateFilter;
  // type de filtre
  private _filter: string;
  // liste des bureaux
  private _offices: Office[];
  // type de design
  private _design: string;
  private _reload: boolean;

  /**
   * constructor
   * @param sidebarService
   * @param _serviceOffice
   * @param cd
   */
  constructor(private _serviceOffice: OfficeService, private sidebarService: NbSidebarService) {
    this.form = new FormGroup({
      search: new FormControl(),
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
    this._reload = true;
  }

  /**
   * onInit
   */
  ngOnInit(): void {
      this._reload = false;
      this._serviceOffice.fecth().subscribe((_: Office[]) => {
          this._offices = _;
      });
  }

  /**
   * trie les bureaux selon l'eatge et le batiment
   * @param data
   */
  filterfloorBatiment(data: any) {
    this._stateFilter.floor = data.floor;
    this._stateFilter.building = data.building;
  }

  /**
   * affiche ou cache la sidebar
   */
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  /**
   * change de design
   * @param design
   */
  switchDesign(design: string) {
    this._design = design;
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

  /**
   * gere l'event du clavier
   * @param event
   */
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
  /*********************************************************GET&SETTER*************************************************/

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
  get design(): string {
    return this._design;
  }
  get stateFilter(): StateFilter {
    return this._stateFilter;
  }
  get offices(): Office[] {
    return this._offices;
  }
  get filter(): string {
    return this._filter;
  }

  setOffice(data: boolean) {
    if ( data ) {
      this._reload = true;
      this._serviceOffice.fecth().subscribe((_: Office[]) => {
        this._offices = _;
        this._reload = false;
      });
    }
  }
}


