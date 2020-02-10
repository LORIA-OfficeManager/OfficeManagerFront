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
  dateFilter: boolean;
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
  private _myControl = new FormControl();
  // liste des personnes
  options: Person[];
  // liste des personnes filtre
  private _filteredOptions: Observable<Person[]>;
  // constante des Filtres
  private _etat = 'etat';
    private _batiment = 'batiment';
  private _nom = 'nom';
  private _person = 'person';
  private _date = 'date';
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
    this._stateFilter = {
      name : '',
      floor : -1,
      building : 'none',
      stateOffice: 'none',
      dateFilter: false,
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
  get myControl(): FormControl {
    return this._myControl;
  }

  displayFn(user?: Person): string | undefined {
    return user ? user.lastname.toUpperCase() : undefined;
  }

  private _filterPerso(name: string): Person[] {
    const filterValue = name.toUpperCase();
    return this.options.filter(option => option.lastname.toUpperCase().indexOf(filterValue) === 0);
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
    if (this._filter === 'date' && this._filter !== filtre ) {
      this.setOffice(true);
    }
    this._filter = filtre;
    this._stateFilter = {
      name: '',
      floor: -1,
      building: 'none',
      stateOffice: 'none',
      dateFilter: false,
    };
    if (filtre === 'date') {
      this._stateFilter.dateFilter = true;
    }
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
  get filteredOptions(): Observable<Person[]> {
    return this._filteredOptions;
  }
  get person(): string {
    return this._person;
  }
  get reload(): boolean {
    return this._reload;
  }
  /**
   * fltre les bureaux selon l'etat
   * @param state
   */
  filterState(state) {
    this._stateFilter.stateOffice = state;
  }
  get date(): string {
    return this._date;
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

  updateOfficeTimeT(data: any) {
    this._serviceOffice.officeDate(data.date).subscribe(
        (_: Office[]) => this._offices = _ ,
    );
  }
}


