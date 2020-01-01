import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss', '../admin/admin.component.scss'],
})
export class ImportComponent implements OnInit {
  // envoie les  fichiers au component principale
  private _import$: EventEmitter<any[]>;
  // tableau des fichiers dans le drag and drop
  private _files: any[];

  /**
   * constructor
   */
  constructor() {
    this._import$ = new EventEmitter<any[]>();
    this._files = [];
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

  /*********************************************************GET&SETTER*************************************************/

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
    this._import$.emit(this._files);
  }
}
