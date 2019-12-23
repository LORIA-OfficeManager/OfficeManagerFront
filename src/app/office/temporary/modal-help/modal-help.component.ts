import {Component, OnInit, TemplateRef} from '@angular/core';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-modal-help',
  templateUrl: './modal-help.component.html',
  styleUrls: ['./modal-help.component.scss',
  '../list-office/list-office.component.scss'],
})
export class ModalHelpComponent implements OnInit {

  /**
   * construtor
   * @param dialogService
   */
  constructor(private dialogService: NbDialogService) {
  }

  /**
   *
   */
  ngOnInit() {
  }

  /**
   * ouvre la dialog
   * @param dialog
   */
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }

}
