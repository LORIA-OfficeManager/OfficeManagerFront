import { Component, OnInit, TemplateRef } from '@angular/core';
import {NbComponentStatus, NbDialogService, NbToastrService} from '@nebular/theme';
import {ReportErrorService} from '../../shared/services/reportError.service';

@Component({
  selector: 'ngx-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss',
    '../list-office/list-office.component.scss'],
})
export class ModalErrorComponent implements OnInit {
  /**
   * construtor
   * @param dialogService
   * @param toastrService
   * @param reportErrorService
   */
  constructor(private dialogService: NbDialogService, private toastrService: NbToastrService,
              private reportErrorService: ReportErrorService) {}

  /**
   * Init
   */
  ngOnInit() {}

  /**
   * ouvre la dialog
   * @param dialog
   */
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {context: 'this is some additional data passed to dialog'});
  }

  submit(data: any) {
    this.reportErrorService.reportError(data.message).subscribe(
        (_) =>  this.showToastSuc('success', 'bottom-end'),
        (_) =>  this.showToastErr('warning', 'bottom-end'),
    );
  }

  showToastSuc(status: NbComponentStatus, position) {
    this.toastrService.show(` un  email a etait envoyé a un administrateur`,
        `L'erreur a etait notifié`,
        { status, position, limit: 2});
  }
  showToastErr(status: NbComponentStatus, position) {
    this.toastrService.show(` le mail n'a pas pu etre envoyé `,
        `Une erreur est survenu lors du traitement`,
        { status, position, limit: 2});
  }
}
