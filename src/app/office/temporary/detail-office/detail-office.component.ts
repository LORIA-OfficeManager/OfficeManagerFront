import { Component, OnInit } from '@angular/core';
import {NbWindowRef} from '@nebular/theme';
import {Office} from '../../shared/interfaces/office';

@Component({
  selector: 'ngx-detail-office',
  templateUrl: './detail-office.component.html',
  styleUrls: ['./detail-office.component.scss'],
})
export class DetailOfficeComponent implements OnInit {
  // le bureau
  private _office: Office;

  /**
   * costructor
   * @param windowRef
   */
  constructor(public windowRef: NbWindowRef) {
    // on init office avec les donnees passe dans context
    this._office = this.windowRef.config.context as Office;
  }

  /**
   */
  ngOnInit() {}

  /**
   * declenche la fermeture
   */
  close() {
    this.windowRef.close();
  }

  /*********************************************************GET&SETTER*************************************************/

  /**
   * retourne l'office
   */
  get office(): Office {
    return this._office;
  }

}
