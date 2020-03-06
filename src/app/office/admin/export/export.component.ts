import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngx-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss',
  '../import/import.component.scss'],
})
export class ExportComponent implements OnInit {

  private _export$: EventEmitter<any>;

  constructor() {
    this._export$ = new EventEmitter<any>();
  }

  ngOnInit() {

  }

  @Output('export')
  get export$() {
    return this._export$;
  }

  export() {
    this._export$.emit();
  }

}
