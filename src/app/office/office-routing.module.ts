import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {TestComponent} from './temporary/test/test.component';
import {OfficeComponent} from './office.component';
import {ListOfficeComponent} from './temporary/list-office/list-office.component';
// import {DevGuardService} from './shared/services/guards/dev-guard.service';
import {UserGuardService} from './shared/services/guards/user-guard.service';
import {ListPersoComponent} from './temporary/list-perso/list-perso.component';

const routes: Routes = [{
  path: '',
  component: OfficeComponent,
  children: [
    {
      path: 'test',
      // canActivate: [DevGuardService], // Only during dev mode, not production
      component: TestComponent,
    },
    {
      path: 'listBureauTest',
      canActivate: [UserGuardService], // Only Users or above
      component: ListOfficeComponent,
    },
    {
      path: 'personnels',
      canActivate: [UserGuardService], // Only Users or above
      component: ListPersoComponent,
    },
    {
      path: 'auth',
      loadChildren: () => import('app/office/auth/auth.module')
        .then(m => m.AuthModule),
    },
    {
      path: '',
      redirectTo: '/office/test',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficeRoutingModule { }
