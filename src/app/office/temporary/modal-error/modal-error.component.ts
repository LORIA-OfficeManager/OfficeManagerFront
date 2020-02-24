import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

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
   */
  constructor(private dialogService: NbDialogService) {}

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
}
