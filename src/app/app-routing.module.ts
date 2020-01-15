import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment.prod';

const routes: Routes = [
  {
    path: 'officeManager',
    loadChildren: () => import('app/office/office.module')
      .then(m => m.OfficeModule),
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
