import { Component, OnInit } from '@angular/core';
import {NbWindowRef} from '@nebular/theme';

@Component({
  selector: 'ngx-detail-office',
  templateUrl: './detail-office.component.html',
  styleUrls: ['./detail-office.component.scss'],
})
export class DetailOfficeComponent implements OnInit {

  private _data: any;
  constructor(public windowRef: NbWindowRef) {
    this._data = windowRef.config.context;
  }

  close() {
    this.windowRef.close();
  }
  ngOnInit() {
  }
  get data(): any {
    return this._data;
  }

  /**
   *
   */
  now(p: any) {
    return Date.now() ;
  }
}
