import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
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
export class AdminComponent implements OnInit, AfterViewInit {
  //
  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  //
  @ViewChildren('item') itemElements: QueryList<any>;
  //
  private scrollContainer: any;
  //
  private isNearBottom = true;
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

  /**
   *
   */
  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
    // a modifier plus tard car pas optimal
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());
  }

  /**
   *
   */
  ngOnInit() {}

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
          text: '' + _.message + '\n' + _.error.error + '\n',
          class: 'errorImport',
        }),
        () => this.onItemElementsChanged(),
    );
  }

  /*********************************************************Scroll*************************************************/
  private onItemElementsChanged(): void {
    if (this.isNearBottom) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  private isUserNearBottom(): boolean {
    const threshold = 150;
    const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const height = this.scrollContainer.scrollHeight;
    return position > height - threshold;
  }

  scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
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