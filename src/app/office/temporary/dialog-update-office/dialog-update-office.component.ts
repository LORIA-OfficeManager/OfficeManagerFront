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
  // bureau
  private _office: OfficeDetail;
  // nom du bureau
  private _officeName: String;
  // event
  private _submit$: EventEmitter<OfficeDetail>;
  // fomulaire
  form: FormGroup;

  /**
   * constructor
   * @param dialogService
   */
  constructor(private dialogService: NbDialogService) {
    this.form = new FormGroup({
      size: new FormControl(),
    });
    this._submit$ = new EventEmitter<OfficeDetail>();
  }

  ngOnInit() {
  }

  /**
   *
   * @param dialog
   */
  open(dialog: TemplateRef<any>) {
      this.dialogService.open(dialog, { closeOnBackdropClick: false , context: ''});
  }

  /**
   * modifier
   * @param ref
   * @param event
   */
  modifier(ref, event: any) {
    const modif = { isupdate : false };
    if (event.size !==  this._office.office.size) {
      modif.isupdate = true;
    }
    this._office.office.size = event.size;
    this.submit(modif);
    ref.close();
  }
  /********************************************************GET&SETTER**************************************************/
  /////// office
  @Input()
  set office(office: OfficeDetail) {
    this._office = office;
  }
  get office(): OfficeDetail {
    return this._office;
  }
  /////// officeName
  get officeName(): String {
    return this._officeName;
  }
  @Input()
  set officeName(n: String) {
    this._officeName = n;
  }
  /////// submit
  @Output('submit')
  get sumbit$() {
    return this._submit$;
  }
  submit( modif: any) {
    this._submit$.emit(modif);
  }
}
