import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NbAuthComponent} from '@nebular/auth';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UserGuardService} from '../../shared/services/guards/user-guard.service';
import {GuestGuardService} from '../../shared/services/guards/guest-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        canActivate: [GuestGuardService], // Only if user is a guest
        component: LoginComponent,
      },
      {
        path: 'login',
        canActivate: [GuestGuardService], // Only if user is a guest
        component: LoginComponent,
      },
      {
        path: 'logout',
        canActivate: [UserGuardService], // Only Users or above
        component: LogoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
