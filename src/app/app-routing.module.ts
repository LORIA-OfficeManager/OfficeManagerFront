import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {DevGuardService} from './office/shared/services/guards/dev-guard.service';
import {environment} from '../environments/environment.prod';

const routes: Routes = [
  {
    path: 'officeManager',
    loadChildren: () => import('app/office/office.module')
      .then(m => m.OfficeModule),
  },
  {
    path: 'exemple',
    canActivate: [DevGuardService],
    loadChildren: () => import('app/exemple/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    canActivate: [DevGuardService],
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'officeManager', pathMatch: 'full' },
  { path: '**', redirectTo: 'exemple' },
];

const config: ExtraOptions = {
  enableTracing: !environment.production,
  useHash: !environment.production,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
