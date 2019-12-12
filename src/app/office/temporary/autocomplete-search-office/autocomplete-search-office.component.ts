import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Office} from '../../shared/interfaces/office';
import {OfficeService} from '../../shared/services/office.service';

@Component({
  selector: 'ngx-autocomplete-search-office',
  templateUrl: './autocomplete-search-office.component.html',
  styleUrls: ['./autocomplete-search-office.component.scss'],
})
export class AutocompleteSearchOfficeComponent implements OnInit {

  // fomulaire
  form: FormGroup;
  // valeur de linput
  value = '' ;
  // tableau de heros
  private _models: Office[];
  // tablleau permetant de revenir en arriere
  private _modelsback: Office[];
  // eventEmitter qui retourne les heros
  private readonly _submit$: EventEmitter<Office[]>;

  /**
   * Constructor
   */
  constructor(private _serviceOffice: OfficeService) {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this._submit$ = new EventEmitter<Office[]>();
  }

  /**
   *
   */
  ngOnInit() {
  }

  /**
   * fonction qui se declenche a chaque fois qu'une lettre est ajouté,
   * elle filtre les heros
   * @param event lettre
   */
  onKey(event: any) {
    // si on supprime un caractere
    if (this.value.length >= event.target.value.length) {
      this.value = event.target.value;
      const filterValue = this.value.toLowerCase();
      this._serviceOffice.fecth().subscribe((_: Office[]) => {
            this._models = _.filter((model: Office) => this.name(model).toLowerCase().indexOf(filterValue) === 0);
            this.submit(this._models);
          },
      );
    } else {
      // si on ajoute un caractere
      this.value = event.target.value;
      const filterValue = this.value.toLowerCase();
      this._models = this._models.filter((model: Office) => this.name(model).toLowerCase().indexOf(filterValue) === 0);
      this.submit(this._models);
    }
  }


  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<Office[]> {
    return this._submit$;
  }

  /**
   * fonction qui emet l'event submit
   * @param value les heros filtrer
   */
  submit(value: Office[]) {
    this._submit$.emit(value);
  }
  /********************************************GET&SET*****************************************/
  get office(): Office[] {
    return this._models;
  }
  @Input()
  set models(model: Office[]) {
    this._models = model;
  }

  /**
   * retourne le nom du bureau
   * @param office
   */
  name(office: Office): string {
    let name = '' + office.num;
    if (office.num < 10) {
      name = '0' + office.num;
    }
    return  office.building + '' + office.floor + '' + name ;
  }

}
