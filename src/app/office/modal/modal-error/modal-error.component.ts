import { Component, OnInit, TemplateRef } from '@angular/core';
import {NbComponentStatus, NbDialogService, NbToastrService} from '@nebular/theme';
import {ReportErrorService} from '../../shared/services/reportError.service';

@Component({
  selector: 'ngx-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss',
    '../../listData/list-office/list-office.component.scss'],
})
export class ModalErrorComponent implements OnInit {
  /**
   * construtor
   * @param _dialogService
   * @param _toastrService
   * @param _reportErrorService
   */
  constructor(private _dialogService: NbDialogService,
              private _toastrService: NbToastrService,
              private _reportErrorService: ReportErrorService) {}

  /**
   * Init
   */
  ngOnInit() {}

  /**
   * ouvre la dialog
   * @param dialog
   */
  open(dialog: TemplateRef<any>) {
    this._dialogService.open(dialog);
  }

  submit(data: any) {
    this._reportErrorService.reportError(data.message).subscribe(
        (_) =>  this.showToastSuc('success', 'bottom-end'),
        (_) =>  this.showToastErr('warning', 'bottom-end'),
    );
  }

  showToastSuc(status: NbComponentStatus, position) {
    this._toastrService.show(` Un email a été envoyé à un administrateur`,
        `L'erreur a été notifié`,
        { status, position, limit: 2});
  }
  showToastErr(status: NbComponentStatus, position) {
    this._toastrService.show(` le mail n'a pas pu être envoyé `,
        `Une erreur est survenu lors du traitement`,
        { status, position, limit: 2});
  }
}
