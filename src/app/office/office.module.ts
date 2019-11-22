import { NgModule } from '@angular/core';
import {OfficeRoutingModule} from './office-routing.module';
import {TestComponent} from './temporary/test/test.component';
import { OfficeComponent } from './office.component';
import {ThemeModule} from '../@theme/theme.module';
import {NbButtonModule, NbCardModule} from '@nebular/theme';

@NgModule({
  imports: [
    OfficeRoutingModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
  ],
  declarations: [
    TestComponent,
    OfficeComponent,
  ],
})
export class OfficeModule { }
