import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Person} from '../../shared/interfaces/person';
import { PersonService } from '../../shared/services/person.service';

@Component({
    selector: 'ngx-form-persone-error',
    templateUrl: './form-persone-error.component.html',
    styleUrls: ['./form-persone-error.component.scss'],
})
export class FormPersoneErrorComponent implements OnInit  {
// private property to store cancel$ value
    private readonly _cancel$: EventEmitter<void>;
    // private property to store submit$ value
    private readonly _submit$: EventEmitter<any>;
    // private property to store form value
    private _form: FormGroup;
    // liste des personnes
    private _people: Person[];
    /**
     * Constructor
     * @param _peopleService
     */
    constructor(private _peopleService: PersonService) {
        this._submit$ = new EventEmitter<any>();
        this._cancel$ = new EventEmitter<void>();
        this._form = this._buildForm();
        this._people = [];
    }
    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._peopleService.fecth().subscribe((_: Person[]) => {
            this._people = _;
        });
    }

    /**
     * Function to build our form
     */
    private _buildForm(): FormGroup {
        return new FormGroup({
            people: new FormControl('', Validators.compose([
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
        let message = 'Une erreur a été détecté  pour les personnes suivantes : \n';
        for (const person of error.people) {
            message += ' - ' + person.lastname.toUpperCase() + ' ' + person.firstname + '\n';
        }
        message += error.message;
        this.submit$.emit({message : message});
    }
    /*******************************************************GET&SETTER*************************************************/
    /**
     * Returns private property _form
     */
    get form(): FormGroup {
        return this._form;
    }
    get people(): Person[] {
        return this._people;
    }
}
