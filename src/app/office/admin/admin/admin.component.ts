import { Component, OnInit } from '@angular/core';
import {OfficeService} from '../../shared/services/office.service';

export interface Logs {
  title: string; // titre du log
  text: string; // text du log
  class: string; // style
}

@Component({
  selector: 'ngx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  // string qui definie l'action selectionne encours
  private _action: string;
  // string qui definie l'affichage ou non des infos d'execution de actions
  private _showInfo: string;
  // log
  private _logs: Logs[];

  /**
   * constructor
   * @param _officeService service des bureaux
   */
  constructor( private _officeService: OfficeService) {
    this._action = 'import';
    this._showInfo = 'show';
    this._logs = [];
  }

  ngOnInit() {
  }

  /**
   * modifie le component principale de la page
   * @param newAction
   */
  changeAction(newAction: string) {
    this._action = newAction;
  }

  /**
   * cache ou affiche la console
   */
  toggle() {
    this._showInfo = this._showInfo === 'hide' ? 'show' : 'hide';
  }

  /**
   * import les fichiers
   * @param files
   */
  import(files: any) {
    // this._officeService.import(files).subscribe(_ => console.log(_));
    this._officeService.importDefault().subscribe(
        _ => this._logs.push({
          title : 'Import',
          text: '\n' + _.name,
          class: '',
        }),
        _ =>  this._logs.push({
          title : 'Import ' + _.name + ' : ',
          text: '\n' + _.message + '\n' + _.error.error,
          class: 'errorImport',
        }),
    );
  }

  /*********************************************************GET&SETTER*************************************************/

  get showInfo(): string {
    return this._showInfo;
  }
  get logs(): Logs[] {
    return this._logs;
  }
  get action(): string {
    return this._action;
  }
}
