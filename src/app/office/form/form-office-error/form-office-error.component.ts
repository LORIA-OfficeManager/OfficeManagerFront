import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Office } from '../../shared/interfaces/office';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { OfficeService } from '../../shared/services/office.service';

@Component({
    selector: 'ngx-form-office-error',
    templateUrl: './form-office-error.component.html',
    styleUrls: ['./form-office-error.component.scss'],
})
export class FormOfficeErrorComponent implements OnInit {
    // private property to store cancel$ value
    private readonly _cancel$: EventEmitter<void>;
    // private property to store submit$ value
    private readonly _submit$: EventEmitter<any>;
    // private property to store form value
    private readonly _form: FormGroup;
    // liste des bureaux
    private _offices: Office[];
    /**
     * Constructor
     * @param _officeService
     */
    constructor(private _serviceOffice: OfficeService) {
        this._submit$ = new EventEmitter<any>();
        this._cancel$ = new EventEmitter<void>();
        this._form = this._buildForm();
        this._offices = [];
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._serviceOffice.fecth().subscribe((_: Office[]) => {
            this._offices = _;
        });
    }

    /**
     * Function to build our form
     */
    private _buildForm(): FormGroup {
        return new FormGroup({
            office: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            message: new FormControl('', Validators.compose( [
                Validators.required,
            ])),
        });
    }
    /*********************************************************EVENT****************************************************/
    /**
     * Returns private property _cancel$
     */
    @Output('cancel')
    get cancel$(): EventEmitter<void> {
        return this._cancel$;
    }
    /**
     * Function to emit event to cancel process
     */
    cancel() {
        this._cancel$.emit();
    }

    /**
     * Returns private property _submit$
     */
    @Output('submit')
    get submit$(): EventEmitter<any> {
        return this._submit$;
    }
    /**
     * Function to emit event to submit form and person
     */
    submit(error: any) {
        let message = 'Une erreur a été détecté  pour le Bureau ' + this.name(error.office) + '\n\n';
        message += error.message;
        this.submit$.emit({message : message});
    }
    /*******************************************************GET&SETTER*************************************************/
    get offices(): Office[] {
        return this._offices;
    }
    /**
     * Returns private property _form
     */
    get form(): FormGroup {
        return this._form;
    }
    name(office: Office): string {
        return  office.building + '' + office.floor + '' + office.num ;
    }

}
