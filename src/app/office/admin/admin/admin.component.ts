import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Log} from '../../shared/interfaces/log';
import {ImportService} from '../../shared/services/import.service';

@Component({
  selector: 'ngx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, AfterViewInit {
  // Scroll Log autonome
  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;
  private scrollContainer: any;
  private isNearBottom = true;
  // string qui definie l'action selectionne encours
  private _action: string;
  // string qui definie l'affichage ou non des infos d'execution de actions
  private _showInfo: string;
  // log
  private _logs: Log[];


  /**
   * constructor
   * @param _importService
   */
  constructor( private _importService: ImportService) {
    this._action = 'import';
    this._showInfo = 'show';
    this._logs = [];
  }

  /**
   * ngAfterViewInit
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
    this._importService.import(files).subscribe(
        _ => this._logs.push({
          title : _.type,
          text: '\n' + _.text,
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
  /**
   * permet de scroll le log
   * cette methode est appele afin de scroll
   * lorsque des information sont ajoute au log
   */
  private onItemElementsChanged(): void {
    if (this.isNearBottom) {
      this.scrollToBottom();
    }
  }

  /**
   * scroll vers le bas
   */
  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  /**
   * test si l'utilisateur est a la fin du log
   */
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
  get logs(): Log[] {
    return this._logs;
  }
  get action(): string {
    return this._action;
  }
}
