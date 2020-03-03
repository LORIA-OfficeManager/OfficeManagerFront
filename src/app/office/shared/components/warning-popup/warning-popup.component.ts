import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-warning-popup',
  templateUrl: './warning-popup.component.html',
  styleUrls: ['./warning-popup.component.scss'],
})
export class WarningPopupComponent implements OnInit {
    private _submit$: EventEmitter<any>;
    private _obeject: any;
    private _message: String;
    private _icon: String;
    constructor(private dialogService: NbDialogService) {
      this._submit$ = new EventEmitter<any>();
      this._obeject = {} as any;
    }

    /**
     *
     */
    ngOnInit() {
    }

    /**
     *
     * @param dialog
     */
    open(dialog: TemplateRef<any>) {
        this.dialogService.open(dialog);
    }
    @Input()
    set message(_: String) {
        this._message = _;
    }
    get message(): String {
        return this._message;
    }
    @Input()
    set icon(_: String) {
        this._icon = _;
    }
    get icon(): String {
        return this._icon;
    }

    @Input()
    set object(_: any) {
      this._obeject = _;
    }
    @Output('submit')
    get submit$() {
        return this._submit$;
    }
    /**
     * emet l'evenement
     */
    submit() {
        this._submit$.emit(this._obeject);
    }

    /**
     *
     */
    get object(): any {
        return this._obeject;
    }
}
