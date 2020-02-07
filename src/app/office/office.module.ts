import { NgModule } from '@angular/core';
import {OfficeRoutingModule} from './office-routing.module';
import {HomePageComponent} from './temporary/home-page/home-page.component';
import { OfficeComponent } from './office.component';
import {ThemeModule} from '../@theme/theme.module';
import {
    NbAccordionModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule, NbCheckboxModule, NbContextMenuModule, NbDialogModule, NbIconModule, NbInputModule,
    NbLayoutModule, NbListModule, NbPopoverModule, NbRadioModule, NbSearchModule, NbSelectModule,
    NbSidebarModule, NbTabsetModule, NbTooltipModule, NbTreeGridModule, NbUserModule, NbWindowModule,
} from '@nebular/theme';
import { ListOfficeComponent } from './temporary/list-office/list-office.component';
import { SideBarListBuildingComponent} from './temporary/side-bar-list-building/side-bar-list-building.component';
import { RadioInputListOfficeComponent } from './temporary/radio-input-list-office/radio-input-list-office.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import {
    AutoCompletePipe, AutoCompletePipeP,
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
import { DialogAssignementComponent } from './temporary/dialog-assignement/dialog-assignement.component';
import { WarningPopupComponent } from './shared/components/warning-popup/warning-popup.component';
import { ListPersoComponent } from './temporary/list-perso/list-perso.component';
import {MatButtonToggleModule} from '@angular/material';
import { AdminComponent } from './admin/admin/admin.component';
import { DragAndDropDirective } from './admin/drag-and-drop.directive';
import { ImportComponent } from './admin/import/import.component';
import {MatButtonModule} from '@angular/material/button';
import {AuthModule} from './auth/auth.module';
import { DepartmentComponent } from './admin/department/department.component';
import { DepartmentItemComponent } from './admin/department/department-item/department-item.component';
import { DialogUpdateOfficeComponent } from './temporary/dialog-update-office/dialog-update-office.component';
import { FormOfficeComponent } from './form/form-office/form-office.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DepartmentItemHeaderComponent } from './admin/department/department-item-header/department-item-header.component';

@NgModule({
    imports: [
        OfficeRoutingModule,
        ThemeModule,
        NbLayoutModule,
        NbActionsModule,
        NbSidebarModule,
        NbAccordionModule,
        NbRadioModule,
        FormsModule,
        MatSortModule,
        NbIconModule,
        NbSearchModule,
        NbUserModule,
        NbContextMenuModule,
        NbSecurityModule,
        MatGridListModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ThemeModule,
        NbDialogModule.forChild(),
        NbWindowModule.forChild(),
        NbCardModule,
        NbCheckboxModule,
        NbTabsetModule,
        NbPopoverModule,
        NbButtonModule,
        NbInputModule,
        NbSelectModule,
        NbTooltipModule,
        NbTreeGridModule,
        MatButtonToggleModule,
        MatButtonModule,
        AuthModule,
        NbListModule,
        MatToolbarModule,
        MatAutocompleteModule,
    ],
    declarations: [
        HomePageComponent,
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
        DialogAssignementComponent,
        AutoCompletePipeP,
        WarningPopupComponent,
        ListPersoComponent,
        AdminComponent,
        DragAndDropDirective,
        ImportComponent,
        DepartmentComponent,
        DepartmentItemComponent,
        DialogUpdateOfficeComponent,
        FormOfficeComponent,
        DepartmentItemHeaderComponent,

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
        AutoCompletePipeP,
    ],
    entryComponents: [
        DialogAssignementComponent,
        DialogUpdateOfficeComponent,
        DetailOfficeComponent,
        WarningPopupComponent,
    ],
})
export class OfficeModule { }
