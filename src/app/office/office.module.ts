import { NgModule } from '@angular/core';
import {OfficeRoutingModule} from './office-routing.module';
import {TestComponent} from './temporary/test/test.component';
import { OfficeComponent } from './office.component';
import {ThemeModule} from '../@theme/theme.module';
import {
    NbAccordionModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule, NbIconModule,
    NbLayoutModule, NbPopoverModule, NbRadioModule,
    NbSidebarModule, NbTooltipModule, NbWindowModule,
} from '@nebular/theme';
import { ListOfficeComponent } from './temporary/list-office/list-office.component';
import { SideBarListBuildingComponent} from './temporary/side-bar-list-building/side-bar-list-building.component';
import { RadioInputListOfficeComponent } from './temporary/radio-input-list-office/radio-input-list-office.component';
import {FormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {OfficePipePipe, StrangerPipe} from './shared/pipe/office-pipe.pipe';
import { RadioInputEtatListOfficeComponent } from './temporary/radio-input-etat-list-office/radio-input-etat-list-office.component';
import { TabOfficeComponent } from './temporary/tab-office/tab-office.component';
import { WindowOfficeComponent } from './temporary/window-office/window-office.component';
import { ModalHelpComponent } from './temporary/modal-help/modal-help.component';

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
        NbIconModule,
        NbTooltipModule,
        NbPopoverModule,
    ],
  declarations: [
    TestComponent,
    OfficeComponent,
    ListOfficeComponent,
    SideBarListBuildingComponent,
    RadioInputListOfficeComponent,
    OfficePipePipe,
    StrangerPipe,
    RadioInputEtatListOfficeComponent,
    TabOfficeComponent,
    WindowOfficeComponent,
    ModalHelpComponent,
  ],
    providers: [
        OfficePipePipe,
        StrangerPipe,
    ],
})
export class OfficeModule { }
