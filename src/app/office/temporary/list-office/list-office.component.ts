import {Component, OnInit} from '@angular/core';
import {Office} from '../../shared/interfaces/office';
import {OfficeService} from '../../shared/services/office.service';
import {NbSidebarService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';
import {Person} from '../../shared/interfaces/person';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {PersonService} from '../../shared/services/person.service';
import {StateFilter} from '../../shared/interfaces/state-filter';


@Component({
  selector: 'ngx-test-list-office',
  templateUrl: './list-office.component.html',
  styleUrls: ['./list-office.component.scss',
      ],
})

export class ListOfficeComponent implements OnInit {

  // constante des Filtres
  private _etat = 'etat';
  private _batiment = 'batiment';
  private _nom = 'nom';
  private _person = 'person';
  private _date = 'date';

  // fomulaire
  form: FormGroup;
  private _myControl = new FormControl();
  // liste des personnes
  options: Person[];
  // liste des personnes filtre
  private _filteredOptions: Observable<Person[]>;
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

  /**
   * affiche ou cache la sidebar
   */
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  /**
   * gere l'event du clavier
   * @param event
   */
  onKey(event: any) {
    this._filtreByOfficeName(event.target.value);
  }

  /**
   * test si c est une personne
   * @param value
   */
  isNotAperson(value: Person): boolean {
    let res = true;
    if (value !== null) {
      if (value.officeName !== undefined) {
        res = false;
      }
    }
    return res;
  }

  /**
   * retourne la liste des bureau pour un temps t
   * @param data
   */
  updateOfficeTimeT(data: any) {
    this._serviceOffice.officeDate(data.date).subscribe(
        (_: Office[]) => this._offices = _ ,
    );
  }
  /***********************************************************Filter***************************************************/
  searchperson(value: Person) {
    this._filtreByOfficeName(value.officeName);
  }
  /**
   * filtre par le nom du bureau
   * @param name
   * @private
   */
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
  /*********************************************************GET&SETTER*************************************************/
  /////// displayFn
  displayFn(user?: Person): string | undefined {
    return user ? user.lastname.toUpperCase() : undefined;
  }
  /////// myControl
  get myControl(): FormControl {
    return this._myControl;
  }
  /////// peopleAssign
  get filteredOptions(): Observable<Person[]> {
    return this._filteredOptions;
  }
  /////// person
  get person(): string {
    return this._person;
  }
  /////// reload
  get reload(): boolean {
    return this._reload;
  }
  /////// date
  get date(): string {
    return this._date;
  }
  /////// etat
  get etat(): string {
    return this._etat;
  }
  /////// batiment
  get batiment(): string {
    return this._batiment;
  }
  /////// nom
  get nom(): string {
    return this._nom;
  }
  /////// design
  get design(): string {
    return this._design;
  }
  /**
   * change de design
   * @param design
   */
  switchDesign(design: string) {
    this._design = design;
  }
  /////// stateFilter
  get stateFilter(): StateFilter {
    return this._stateFilter;
  }
  /**
   * fltre les bureaux selon l'etat
   * @param state
   */
  filterState(state) {
    this._stateFilter.stateOffice = state;
  }
  /////// filter
  get filter(): string {
    return this._filter;
  }
  /////// offices
  get offices(): Office[] {
    return this._offices;
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


