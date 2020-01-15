import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { NbDialogService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';
import {PersonService} from '../../shared/services/person.service';
import {Person} from '../../shared/interfaces/person';

@Component({
  selector: 'ngx-dialog-assignement',
  templateUrl: './dialog-assignement.component.html',
  styleUrls: ['./dialog-assignement.component.scss'],
})
export class DialogAssignementComponent implements OnInit {
  private _officename: string;
  // chaine recherche
  private _search: string;
  // jeu de donnee
  private _people: Person[];
  //
  private _peopleAssign: Person[];
  //
  private _submit$: EventEmitter<Person[]>;
  // fomulaire
  form: FormGroup;

  /**
   * constructor
   * @param dialogService
   * @param _peopleService
   */
  constructor(private dialogService: NbDialogService, private _peopleService: PersonService) {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this._officename = '';
    this._search = '';
    this._people = [];
    this._peopleAssign = [];
    this._peopleService.fecth().subscribe( (_: Person[]) => {
      this._people = _ ;
      this._peopleAssign = _.filter((__: Person) => __.officeName === this._officename) ;
    });
    this._submit$ = new EventEmitter<Person[]>();
  }

  get people(): Person[] {
    return this._people;
  }
  get peopleAssign(): Person[] {
    return this._peopleAssign;
  }

  @Input()
  set officename(officeN: string) {
    this._officename = officeN;
  }

  /**
   *
   */
  ngOnInit() {
  }

  /**
   * Ouvrir le dialog
   * @param dialog
   */
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { closeOnBackdropClick: false , context: 'this is some additional data passed to dialog' });
  }

  /**
   * change la chaine recherche
   * @param event
   */
  onKey(event: any) {
    this._search = event.target.value.toLowerCase();
  }

  /*******************************************************GET&SETTER*************************************************/

  get search(): string {
    return this._search;
  }

  isAssign(person: Person) {
      return this._peopleAssign.filter((_) => _.id === person.id).length > 0;
  }
  peopleNotAssign(): Person[] {
    return this._people.filter( (_: Person) => !this.isAssign(_));
  }
  add(person: any) {
    this._peopleAssign.push(person);
  }
  supp(person: any) {
    this._peopleAssign = this._peopleAssign.filter( (_: Person) => _.id !== person.id );
  }

  get officename(): string {
    return this._officename;
  }
  @Output('submit')
  get sumbit$() {
      return this._submit$;
  }
  submit() {
      this._submit$.emit(this._peopleAssign);
  }

  /**
   * lors de l'annulation on reprend les data de base
   */
  startData() {
    this._peopleAssign = this._people.filter((__: Person) => __.officeName === this._officename) ;
  }
  modifier(ref) {
      this.submit();
      ref.close();
  }
}
