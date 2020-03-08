import { Component, OnInit } from '@angular/core';
import {NbAuthService, NbAuthSimpleToken} from '@nebular/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-test',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  // user
  private puser;

  /**
   * constructor
   * @param authService
   * @param router
   */
  constructor(private authService: NbAuthService, private router: Router) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthSimpleToken) => {

        if (token.isValid()) {
          this.puser = token.getValue();
          this.router.navigateByUrl('/officeManager/Office');
        }

      });
  }

  ngOnInit(): void {
  }

  /**
   * log l'utilisateur
   */
  login() {
    this.router.navigateByUrl('/officeManager/auth');
  }

  /*******************************************************GET&SETTER*************************************************/
  /////// user
  get user() {
    return this.puser;
  }
}
