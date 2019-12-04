import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {NbRoleProvider} from '@nebular/security';

@Injectable({
  providedIn: 'root',
})
export class DevGuardService implements CanActivate {

  private prole;

  constructor(private roleProviderService: NbRoleProvider) {
    roleProviderService.getRole().subscribe( role => this.prole = role);
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !environment.production;
  }


}
