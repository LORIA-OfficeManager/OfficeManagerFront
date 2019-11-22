import { Component, OnInit } from '@angular/core';
import {NbMenuService, NbSpinnerService} from '@nebular/theme';

@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(private menuService: NbMenuService) { }

  ngOnInit() {
    // this.spinner$.load();
  }

  goHome() {
    this.menuService.navigateHome();
  }

}
