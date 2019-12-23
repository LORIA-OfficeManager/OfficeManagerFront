import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbWindowRef} from '@nebular/theme';
import {WarningPopupComponent} from '../../shared/components/warning-popup/warning-popup.component';

@Component({
  selector: 'ngx-detail-office',
  templateUrl: './detail-office.component.html',
  styleUrls: ['./detail-office.component.scss'],
  entryComponents: [WarningPopupComponent],
})
export class DetailOfficeComponent implements OnInit {
  // donnée du bureau
  private _data: any;

  /**
   * constructor
   * @param windowRef
   * @param dialogService
   */
  constructor(public windowRef: NbWindowRef, private dialogService: NbDialogService) {
    this._data = windowRef.config.context;
  }

  ngOnInit() {
  }

  /**
   * ferme la dialog
   */
  close() {
    this.windowRef.close();
  }

  open(id: number) {
    this.dialogService.open(WarningPopupComponent, { context: 'this is some additional data passed to dialog' })
        .onClose.subscribe(name => name && (this.data.persons = this.data.persons.filter(value => value !== id)));
  }

  /*******************************************************GET&SETTER*************************************************/

  get data(): any {
    return this._data;
  }

  suppPersonne(event: any) {
    this._data.persons = this._data.persons.filter(_ => _.id !== event.id);
  }
}
