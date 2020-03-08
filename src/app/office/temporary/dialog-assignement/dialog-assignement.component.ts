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
  // nom du bureau
  private _officename: string;
  // chaine recherche
  private _search: string;
  // jeu de donnee
  private _people: Person[];
  // persone assigne
  private _peopleAssign: Person[];
  // event
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
    this._submit$ = new EventEmitter<Person[]>();
  }

  /**
   *
   */
  ngOnInit() {}

  /**
   * Ouvrir le dialog
   * @param dialog
   */
  open(dialog: TemplateRef<any>) {
    this._peopleService.fecth().subscribe( (_: Person[]) => {
      this._people = _ ;
      this._peopleAssign = _.filter((__: Person) => __.officeName === this._officename) ;
      this.dialogService.open(dialog, { closeOnBackdropClick: false , context: ''});
    });
  }

  /**
   * change la chaine recherche
   * @param event
   */
  onKey(event: any) {
    this._search = event.target.value.toLowerCase();
  }

  /**
   * affecte une personne
   * @param person
   */
  add(person: any) {
    this._peopleAssign.push(person);
  }

  /**
   * desaffect une personne
   * @param person
   */
  supp(person: any) {
    this._peopleAssign = this._peopleAssign.filter( (_: Person) => _.id !== person.id );
  }
  /**
   * lors de l'annulation on reprend les data de base
   */
  startData() {
    this._peopleAssign = this._people.filter((__: Person) => __.officeName === this._officename) ;
  }

  /**
   * modifier le bureau
   * @param ref
   */
  modifier(ref) {
    this.submit();
    ref.close();
  }

  /**
   * test si une personne est assigne
   * @param person
   */
  isAssign(person: Person) {
    return this._peopleAssign.filter((_) => _.id === person.id).length > 0;
  }

  /**
   * retourne les personne non assigne
   */
  peopleNotAssign(): Person[] {
    return this._people.filter( (_: Person) => !this.isAssign(_));
  }

  /*******************************************************GET&SETTER*************************************************/
  /////// people
  get people(): Person[] {
    return this._people;
  }
  /////// peopleAssign
  get peopleAssign(): Person[] {
    return this._peopleAssign;
  }
  /////// search
  get search(): string {
    return this._search;
  }
  /////// officename
  @Input()
  set officename(officeN: string) {
    this._officename = officeN;
  }
  get officename(): string {
    return this._officename;
  }
  /////// submit
  @Output('submit')
  get sumbit$() {
      return this._submit$;
  }
  submit() {
      this._submit$.emit(this._peopleAssign);
  }
}
