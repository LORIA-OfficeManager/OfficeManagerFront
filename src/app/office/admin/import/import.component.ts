import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss', '../admin/admin.component.scss'],
})
export class ImportComponent implements OnInit {
  //
  private _import$: EventEmitter<any[]>;
  //
  private _files: any[];

  /**
   *
   */
  constructor() {
    this._import$ = new EventEmitter<any[]>();
    this._files = [];
  }

  ngOnInit() {
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

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this._files.push(element);
    }
  }
  deleteAttachment(index) {
    this._files.splice(index, 1);
  }
  get files(): any[] {
    return this._files;
  }
}
