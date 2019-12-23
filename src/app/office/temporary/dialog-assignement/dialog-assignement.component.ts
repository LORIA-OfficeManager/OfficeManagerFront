import {Component, OnInit, TemplateRef} from '@angular/core';
import {NbDialogRef, NbDialogService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-dialog-assignement',
  templateUrl: './dialog-assignement.component.html',
  styleUrls: ['./dialog-assignement.component.scss'],
})
export class DialogAssignementComponent implements OnInit {
  // chaine recherche
  private _search: string;
  // jeu de donnee
  public people = [
    {
      _id: 1,
      lastname: 'Gafford',
      firstname: 'Daniel',
      id: 25,
    },
    {
      _id: 2,
      lastname: 'Lavine',
      firstname: 'Zach',
      id: 25,
    },
    {
      _id: 3,
      lastname: 'Dunn',
      firstname: 'Kris',
      id: 0,
    },
    {
      _id: 4,
      lastname: 'Markannen',
      firstname: 'Lauri',
      id: 0,
    },
    {
      _id: 5,
      lastname: 'White',
      firstname: 'Coby',
      id: 0,
    },
    {
      _id: 6,
      lastname: 'Arcidiacono',
      firstname: 'Ryan',
      id: 0,
    },
    {
      _id: 7,
      lastname: 'Young',
      firstname: 'Thadeus',
      id: 0,
    },
  ];
  // fomulaire
  form: FormGroup;

  /**
   * constructor
   * @param dialogService
   */
  constructor(private dialogService: NbDialogService) {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this._search = '';
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
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
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

  add(person: any) {
    this.people.filter((_: any) => _._id === person._id).map((_: any) => _.id = 25);

  }
  supp(person: any) {
    this.people.filter((_: any) => _._id === person._id).map((_: any) => _.id = 0);
  }
}
