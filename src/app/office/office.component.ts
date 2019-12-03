import { Component, OnInit } from '@angular/core';
import {NbSpinnerService} from '@nebular/theme';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'ngx-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
})
export class OfficeComponent implements OnInit {

  constructor(private spinner$: NbSpinnerService, private titleServie: Title) {
  }

  ngOnInit() {
    this.titleServie.setTitle('Office Manager');
    // Getting rid of the spinner
    this.spinner$.load();
  }

}
