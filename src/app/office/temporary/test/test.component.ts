import { Component, OnInit } from '@angular/core';
import {NbAuthService, NbAuthSimpleToken} from '@nebular/auth';
import {Router} from '@angular/router';
import {RoleProviderService} from '../../shared/services/role-provider.service';

@Component({
  selector: 'ngx-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  private puser;

  constructor(private authService: NbAuthService, private router: Router, private roleService: RoleProviderService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {

        if (token.isValid()) {
          this.puser = token.getValue();
        }

      });
  }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl('/office/listBureauTest');
  }

  login() {
    this.router.navigateByUrl('/office/auth');
  }

  get user() {
    return this.puser;
  }
}
