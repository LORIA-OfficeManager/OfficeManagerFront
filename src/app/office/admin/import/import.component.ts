import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss', '../admin/admin.component.scss'],
})
export class ImportComponent implements OnInit {
  // envoie les  fichiers au component principale
  private _import$: EventEmitter<any>;
  // tableau des fichiers dans le drag and drop
  private _files: any[];
  private readonly _form: FormGroup;

  /**
   * constructor
   */
  constructor() {
    this._import$ = new EventEmitter<any[]>();
    this._files = [];
    this._form = this._buildForm();
  }

  ngOnInit() {
  }

  /**
   * ajoute un fichier au tableau
   * @param event
   */
  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this._files.push(element);
    }
  }

  /**
   * supprime un fichier du tableau
   * @param index
   */
  deleteAttachment(index) {
    this._files.splice(index, 1);
  }
  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      import: new FormControl('affectation', Validators.compose([
        Validators.required,
      ])),
    });
  }

  /*********************************************************GET&SETTER*************************************************/
  /**
   * Returns private property _form
   */
  get form(): FormGroup {
    return this._form;
  }
  get files(): any[] {
    return this._files;
  }
  @Output('import')
  get import$() {
    return this._import$;
  }
  /**
   * emet l'evenement
   */
  import() {
    this._import$.emit({ file : this._files , import: this._form.get('import').value});
  }
}
