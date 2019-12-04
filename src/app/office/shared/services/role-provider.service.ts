import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import {NbAuthService, NbAuthSimpleToken} from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import {Roles} from '../interfaces/roles';

@Injectable()
export class RoleProviderService implements NbRoleProvider {

  constructor(private authService: NbAuthService) {
  }

  getRole(): Observable<string> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthSimpleToken) => {
          // TODO: Update this when backend auth works.
          return token.isValid() ? Roles.user : Roles.guest;
        }),
      );
  }

}
