import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import { NbDialogService} from '@nebular/theme';

@Component({
  selector: 'ngx-warning-popup',
  templateUrl: './warning-popup.component.html',
  styleUrls: ['./warning-popup.component.scss'],
})
export class WarningPopupComponent implements OnInit {
    private _submit$: EventEmitter<any>;
    private _person: any;
    constructor(private dialogService: NbDialogService) {
      this._submit$ = new EventEmitter<any>();
      this.person = {} as any;
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
    set person(_: any) {
      this._person = _;
    }
    @Output('submit')
    get submit$() {
        return this._submit$;
    }
    /**
     * emet l'evenement
     */
    submit() {
        this._submit$.emit(this._person);
    }

    /**
     *
     */
    get person(): any {
        return this._person;
    }
}
