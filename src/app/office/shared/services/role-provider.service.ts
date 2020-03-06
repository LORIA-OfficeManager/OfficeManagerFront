import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import {Roles} from '../interfaces/roles';

@Injectable()
export class RoleProviderService implements NbRoleProvider {

    user = {};

  constructor(private authService: NbAuthService) {
      this.authService.onTokenChange()
          .subscribe((token: NbAuthJWTToken) => {
              if (token.isValid()) {
                  this.user = token.getPayload();
                  // here we receive a payload from the token and assigns it to our `user` variable
              }
          });
  }

  getRole(): Observable<string> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          // TODO: Update this when backend auth works.
          return token.isValid() ? token.getPayload().role : Roles.guest;
        }),
      );
  }

}
