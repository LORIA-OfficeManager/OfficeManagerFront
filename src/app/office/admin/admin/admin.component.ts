import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  private _action: string;
  constructor() {
    this._action = 'import';
  }

  ngOnInit() {
  }

  get action(): string {
    return this._action;
  }

  changeAction(newAction: string) {
    this._action = newAction;
  }
}
