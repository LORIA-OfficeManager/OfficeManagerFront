import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {NbRoleProvider} from '@nebular/security';
import {Roles} from '../../interfaces/roles';

@Injectable({
  providedIn: 'root',
})
export class GuestGuardService implements CanActivate {

  private prole;

  constructor(private roleProviderService: NbRoleProvider) {
    roleProviderService.getRole().subscribe( role => this.prole = role);
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.prole === Roles.guest;
  }


}
