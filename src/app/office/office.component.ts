import { Component, OnInit } from '@angular/core';
import {NbSpinnerService} from '@nebular/theme';
import {NbAuthService, NbAuthSimpleToken} from '@nebular/auth';

@Component({
  selector: 'ngx-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
})
export class OfficeComponent implements OnInit {

  constructor(private spinner$: NbSpinnerService) {
  }

  ngOnInit() {
    // Getting rid of the spinner
    this.spinner$.load();
  }

}
