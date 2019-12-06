import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Roles} from '../../interfaces/roles';
import {NbRoleProvider} from '@nebular/security';

@Injectable({
  providedIn: 'root',
})
export class UserGuardService implements CanActivate {

  private prole;

  constructor(private roleProviderService: NbRoleProvider) {
    this.roleProviderService.getRole().subscribe( role => this.prole = role);
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return Roles.above(this.prole, Roles.user);
  }


}
