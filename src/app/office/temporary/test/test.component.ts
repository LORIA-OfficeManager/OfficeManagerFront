import { Component, OnInit } from '@angular/core';
import {NbAuthService, NbAuthSimpleToken} from '@nebular/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  private puser;

  constructor(private authService: NbAuthService, private router: Router) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {

        if (token.isValid()) {
          this.puser = token.getValue();
        }

      });
  }

  ngOnInit(): void {
  }

  goOffice() {
    this.router.navigateByUrl('/officeManager/Office');
  }

  login() {
    this.router.navigateByUrl('/officeManager/auth');
  }

  get user() {
    return this.puser;
  }
}
