import { NgModule } from '@angular/core';
import {OfficeRoutingModule} from './office-routing.module';
import {TestComponent} from './temporary/test/test.component';
import { OfficeComponent } from './office.component';
import {ThemeModule} from '../@theme/theme.module';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbContextMenuModule, NbIconModule,
  NbLayoutModule, NbPopoverModule, NbRadioModule, NbSearchModule, NbSelectModule,
  NbSidebarModule, NbTooltipModule, NbUserModule, NbWindowModule,
} from '@nebular/theme';
import { ListOfficeComponent } from './temporary/list-office/list-office.component';
import { SideBarListBuildingComponent} from './temporary/side-bar-list-building/side-bar-list-building.component';
import { RadioInputListOfficeComponent } from './temporary/radio-input-list-office/radio-input-list-office.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {
    AutoCompletePipe,
    BuildingFloorPipe,
    OfficePipePipe, SearchByNPipe,
    StateOfficePipe, StatusPipe,
    StrangerPipe,
    ZombiePipe,
} from './shared/pipe/office-pipe.pipe';
import { RadioInputEtatListOfficeComponent } from './temporary/radio-input-etat-list-office/radio-input-etat-list-office.component';
import { TabOfficeComponent } from './temporary/tab-office/tab-office.component';
import { WindowOfficeComponent } from './temporary/window-office/window-office.component';
import { ModalHelpComponent } from './temporary/modal-help/modal-help.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {NbSecurityModule} from '@nebular/security';
import {RoleProviderService} from './shared/services/role-provider.service';
import { MapComponent } from './temporary/map-office/map/map.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DetailOfficeComponent } from './temporary/detail-office/detail-office.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserModule} from '@angular/platform-browser';

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
        NbSelectModule,
        NbSearchModule,
        NbUserModule,
        NbContextMenuModule,
        NbSecurityModule,
        MatGridListModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
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
        HeaderComponent,
        MapComponent,
        DetailOfficeComponent,
        ZombiePipe,
        BuildingFloorPipe,
        StateOfficePipe,
        AutoCompletePipe,
        SearchByNPipe,
        StatusPipe,
    ],
    providers: [
        OfficePipePipe,
        StrangerPipe,
        ZombiePipe,
        BuildingFloorPipe,
        StateOfficePipe,
        AutoCompletePipe,
        RoleProviderService,
        SearchByNPipe,
        StatusPipe,
    ],
    entryComponents: [
        DetailOfficeComponent,
    ],
})
export class OfficeModule { }
