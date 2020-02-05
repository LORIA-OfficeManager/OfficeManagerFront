import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {FormControl, FormGroup} from '@angular/forms';
import {OfficeDetail} from '../../shared/interfaces/officeDetail';

@Component({
  selector: 'ngx-dialog-update-office',
  templateUrl: './dialog-update-office.component.html',
  styleUrls: ['./dialog-update-office.component.scss'],
})
export class DialogUpdateOfficeComponent implements OnInit {
  private _office: OfficeDetail;
  private _officeName: String;
  private _submit$: EventEmitter<OfficeDetail>;
  // fomulaire
  form: FormGroup;
  constructor(private dialogService: NbDialogService) {
    this.form = new FormGroup({
      size: new FormControl(),
    });
    this._submit$ = new EventEmitter<OfficeDetail>();
  }
  @Input()
  set office(office: OfficeDetail) {
    this._office = office;
  }
  ngOnInit() {
  }
  open(dialog: TemplateRef<any>) {
      this.dialogService.open(dialog, { closeOnBackdropClick: false , context: ''});
  }
  /*******************************************************GET&SETTER*************************************************/
  @Output('submit')
  get sumbit$() {
    return this._submit$;
  }

  get officeName(): String {
    return this._officeName;
  }

  @Input()
  set officeName(n: String) {
    this._officeName = n;
  }
  submit( modif: any) {
    this._submit$.emit(modif);
  }
  modifier(ref, event: any) {
      const modif = { isupdate : false };
      if (event.size !==  this._office.office.size) {
          modif.isupdate = true;
      }
    this._office.office.size = event.size;
    this.submit(modif);
    ref.close();
  }
  get office(): OfficeDetail {
    return this._office;
  }
}
