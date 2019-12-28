import { Component, OnInit } from '@angular/core';
import {OfficeService} from '../../shared/services/office.service';

@Component({
  selector: 'ngx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  get log(): string {
    return this._log;
  }
  // string qui definie l'action selectionne encours
  private _action: string;
  // string qui definie l'affichage ou non des infos d'execution de actions
  private _showInfo: string;
  // log
  private _log: string;

  /**
   *
   */
  constructor( private _officeService: OfficeService) {
    this._action = 'import';
    this._showInfo = 'show';
    this._log = '';
  }

  ngOnInit() {
  }

  get action(): string {
    return this._action;
  }

  changeAction(newAction: string) {
    this._action = newAction;
  }
  toogle() {
    this._showInfo = this._showInfo === 'hide' ? 'show' : 'hide';
  }
  get showInfo(): string {
    return this._showInfo;
  }


  import(files: any) {
    // this._officeService.import(files).subscribe(_ => console.log(_));
    this._officeService.importDefault().subscribe(_ => this._log = this._log + ' \n ' + _.name);
  }
}
