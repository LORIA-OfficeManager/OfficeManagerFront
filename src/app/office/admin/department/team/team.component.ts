import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../../shared/interfaces/department';

@Component({
  selector: 'ngx-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  private _teams: Team[];

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set teams(teams: Team[]) {
    this._teams = teams;
  }

  get teams(): Team[] {
    return this._teams;
  }

}
