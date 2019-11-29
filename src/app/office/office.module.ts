import { NgModule } from '@angular/core';
import {OfficeRoutingModule} from './office-routing.module';
import {TestComponent} from './temporary/test/test.component';
import { OfficeComponent } from './office.component';
import {ThemeModule} from '../@theme/theme.module';
import {
    NbAccordionModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbLayoutModule, NbRadioModule,
    NbSidebarModule, NbWindowModule,
} from '@nebular/theme';
import { ListOfficeComponent } from './temporary/list-office/list-office.component';
import { SideBarListBuildingComponent} from './temporary/side-bar-list-building/side-bar-list-building.component';
import { RadioInputListOfficeComponent } from './temporary/radio-input-list-office/radio-input-list-office.component';
import {FormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { OfficePipePipe } from './shared/pipe/office-pipe.pipe';
import { RadioInputEtatListOfficeComponent } from './temporary/radio-input-etat-list-office/radio-input-etat-list-office.component';
import { TabOfficeComponent } from './temporary/tab-office/tab-office.component';
import { WindowOfficeComponent } from './temporary/window-office/window-office.component';
import { DetailOfficeComponent} from './temporary/detail-office/detail-office.component';

@NgModule({
    imports: [
        OfficeRoutingModule,
        ThemeModule,
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbActionsModule,
        NbSidebarModule,
        NbAccordionModule,
        NbRadioModule,
        FormsModule,
        MatSortModule,
        NbWindowModule.forChild(),
    ],
  declarations: [
    TestComponent,
    OfficeComponent,
    ListOfficeComponent,
    SideBarListBuildingComponent,
    RadioInputListOfficeComponent,
    OfficePipePipe,
    RadioInputEtatListOfficeComponent,
    TabOfficeComponent,
    WindowOfficeComponent,
    DetailOfficeComponent,
  ],
    providers: [OfficePipePipe],
    entryComponents: [DetailOfficeComponent],
})
export class OfficeModule { }
