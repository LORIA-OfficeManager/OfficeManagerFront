import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {TestComponent} from './temporary/test/test.component';
import {OfficeComponent} from './office.component';
import {ListOfficeComponent} from './temporary/list-office/list-office.component';

const routes: Routes = [{
  path: '',
  component: OfficeComponent,
  children: [
    {
      path: 'test',
      component: TestComponent,
    },
    {
      path: 'listBureauTest',
      component: ListOfficeComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficeRoutingModule { }
