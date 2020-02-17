import {Component, OnInit} from '@angular/core';
import {NbDialogService, NbWindowRef} from '@nebular/theme';
import {WarningPopupComponent} from '../../shared/components/warning-popup/warning-popup.component';
import {Person} from '../../shared/interfaces/person';
import {PersonService} from '../../shared/services/person.service';
import { ZombiePipe} from '../../shared/pipe/office-pipe.pipe';
import {DialogUpdateOfficeComponent} from '../dialog-update-office/dialog-update-office.component';


@Component({
  selector: 'ngx-detail-office',
  templateUrl: './detail-office.component.html',
  styleUrls: ['./detail-office.component.scss'],
  entryComponents: [WarningPopupComponent],
})
export class DetailOfficeComponent implements OnInit {
    // donnee du bureau
    private _data: any;

    /**
     * constructor
     * @param windowRef
     * @param dialogService
     * @param _peopleService
     * @param _pipeZombie
     */
    constructor(public windowRef: NbWindowRef, private dialogService: NbDialogService,
              private _peopleService: PersonService, private _pipeZombie: ZombiePipe) {
        this._data = windowRef.config.context;
    }
    //
    // openDialogUpdateOffice() {
    //     this.dialogService.open(DialogUpdateOfficeComponent)
    //       .onClose.subscribe(size => this._data.office.size = size);
    // }
    /**
     *
     */
    ngOnInit() {
    }

    // /**
    // * ferme la dialog
    // */
    // close() {
    //   this.windowRef.close();
    // }
    /**
     * ouvre la modal qui permet de supprimer une personne
     * @param id
     */
    open(id: number) {
      this.dialogService.open(WarningPopupComponent, { context: 'this is some additional data passed to dialog' })
        .onClose.subscribe(name => name && (this.data.persons = this.data.persons.filter(value => value !== id)));
    }

    /**
     * supprime une personne du buerau
     * @param perso
     */
    suppPersonne(perso: Person) {
        this._peopleService.unassignement(perso.id).subscribe( (_) => {
                this.assignement(this._data.persons = this._data.persons.filter(__ => __.id !== perso.id));
            },
            (_) => undefined,
        );
    }

    /**
     * ajoute une personne au bureau
     * @param _
     */
    addPeople(_: Person) {
        this._data.persons.push({
            id: _.id,
            firstname: _.firstname,
            lastname: _.lastname,
            endDateAffectation: _.endDateAffectation,
            endDateContract: _.endDateContract,
            startDateAffectation: _.startDateAffectation,
            startDateContract: _.startDateContract,
            statusName: _.statusName,
        } as Person);
        this._data.office.occupation = this._data.office.occupation  + this.ocupation(_);
        if (this._pipeZombie.transform(_) === 'Stranger') {
            this._data.office.hasStranger = true;
        }
    }

    /**
     * Remplie le tableau de personne
     * @param people
     */
    assignement(people: Person[]) {
        // on supprime les valeurs du tableau
        for (const oldperson of this._data.persons) {
            const contains = people.filter(__ => __.id === oldperson.id);
            if ( contains.length === 0 ) {
                this.suppPersonne( oldperson);
            }
        }
        // on re remplie le tableau
        this._data.persons = [];
        this._data.office.hasStranger = false;
        this._data.office.occupation = 0;
        for (const person of people) {
            // si la personne etait deja affecte on l ajoute au tableau
            if (person.officeName === this.name()) {
                this.addPeople(person);
            } else {
                // sinon on l'ajoute a la base de donnée
                this._peopleService.assignement(this._data.office.id, person.id).subscribe(
                    (_) => this.addPeople(person),
                );
            }
        }
    }
    /*******************************************************GET&SETTER*************************************************/
    /////// data
    get data(): any {
        return this._data;
    }

    /**
    * reconstruit le nom d un bureau
    */
    name(): string {
        return  this._data.office.building + '' + this._data.office.floor + '' + this._data.office.num + '';
    }

    /**
     * on retourne l'occupation selon le status
     * @param _
     */
    ocupation(_: Person): number {
        let occupation = 0;
        switch (_.statusName) {
            case 'Défaut':
                occupation++;
                break;
            case 'Doctorant':
                occupation =  0.66;
                break;
        }
        return occupation;
    }
}
