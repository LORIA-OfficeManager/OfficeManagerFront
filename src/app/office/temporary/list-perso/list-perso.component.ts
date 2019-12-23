import { Component, OnInit } from '@angular/core';
import {OFFICESDETAIL, Person} from '../../shared/interfaces/person';

@Component({
  selector: 'ngx-list-perso',
  templateUrl: './list-perso.component.html',
  styleUrls: ['./list-perso.component.scss',
    '../tab-office/tab-office.component.scss',
    '../list-office/list-office.component.scss'],
})
export class ListPersoComponent implements OnInit {

  private _people: Person[];

  constructor() { }

  ngOnInit() {
    this._people = OFFICESDETAIL;
  }

  get people(): Person[] {
    return this._people;
  }

  office(id: number): string {
    // TODO: FIX THIS
    return 'Not yet';
  }
}
