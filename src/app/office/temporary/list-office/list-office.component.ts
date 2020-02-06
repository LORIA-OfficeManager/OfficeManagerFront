import {Component, OnInit} from '@angular/core';
import {Office} from '../../shared/interfaces/office';
import {OfficeService} from '../../shared/services/office.service';
import {NbSidebarService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';
import {Person} from '../../shared/interfaces/person';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {PersonService} from '../../shared/services/person.service';


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
  get filteredOptions(): Observable<Person[]> {
    return this._filteredOptions;
  }
  get person(): string {
    return this._person;
  }
  private _person: string;
  get reload(): boolean {
    return this._reload;
  }
  // fomulaire
  form: FormGroup;
  private _myControl = new FormControl();
  options: Person[];
  get myControl(): FormControl {
    return this._myControl;
  }
  private _filteredOptions: Observable<Person[]>;

  displayFn(user?: Person): string | undefined {
    return user ? user.lastname.toUpperCase() : undefined;
  }

  private _filterPerso(name: string): Person[] {
    const filterValue = name.toUpperCase();
    return this.options.filter(option => option.lastname.toUpperCase().indexOf(filterValue) === 0);
  }

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
   * @param _servicePerson
   */
  constructor(private _serviceOffice: OfficeService, private sidebarService: NbSidebarService,
              private _servicePerson: PersonService) {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this._offices = [];
    this._filter = 'batiment';
    this._design = 'tab';
    this._etat = 'etat';
    this._batiment = 'batiment';
    this._nom = 'nom';
    this._person = 'person';
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
    this._servicePerson.fecth().subscribe( ( _: Person[]) => {
      this.options = _;
      this._filteredOptions = this.myControl.valueChanges
          .pipe(
              startWith(''),
              map(value => typeof value === 'string' ? value : value.name),
              map(name => name ? this._filterPerso(name) : this.options.slice()),
          );
    });
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
    this._filtreByOfficeName(event.target.value);
  }
  private _filtreByOfficeName(name: String) {
    if (name !== null) {
      this._stateFilter.name = name.toLowerCase();
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
    } else {
      // Permet d'afficher les bureaux du batiment NULL
      // On veut juste afficher aucun bureau
      this._stateFilter.building = 'NULL';
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

  searchperson(value: Person) {
    this._filtreByOfficeName(value.officeName);
  }

  isNotAperson(value: Person): boolean {
    let res = true;
    if (value !== null) {
      if (value.officeName !== undefined) {
        res = false;
      }
    }
    return res;
  }
}


