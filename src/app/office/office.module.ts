import { NgModule } from '@angular/core';
import {OfficeRoutingModule} from './office-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import { OfficeComponent } from './office.component';
import {ThemeModule} from '../@theme/theme.module';
import {
    NbAccordionModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbContextMenuModule,
    NbDatepickerModule,
    NbDialogModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbListModule,
    NbPopoverModule,
    NbRadioModule,
    NbSearchModule,
    NbSelectModule,
    NbSidebarModule,
    NbTabsetModule, NbToggleModule,
    NbTooltipModule,
    NbTreeGridModule,
    NbUserModule,
    NbWindowModule,
} from '@nebular/theme';
import { ListOfficeComponent } from './listData/list-office/list-office.component';
import { SideBarListBuildingComponent} from './listData/side-bar-list-building/side-bar-list-building.component';
import { RadioInputListOfficeComponent } from './radioButton/radio-input-list-office/radio-input-list-office.component';
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
import { RadioInputEtatListOfficeComponent } from './radioButton/radio-input-etat-list-office/radio-input-etat-list-office.component';
import { TabOfficeComponent } from './listData/officeView/tab-office/tab-office.component';
import { WindowOfficeComponent } from './pageOffice/window-office/window-office.component';
import { ModalHelpComponent } from './modal/modal-help/modal-help.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {NbSecurityModule} from '@nebular/security';
import {RoleProviderService} from './shared/services/role-provider.service';
import { MapComponent } from './listData/officeView/map-office/map/map.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DetailOfficeComponent } from './pageOffice/detail-office/detail-office.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogAssignementComponent } from './dialog/dialog-assignement/dialog-assignement.component';
import { WarningPopupComponent } from './shared/components/warning-popup/warning-popup.component';
import { ListPersoComponent } from './listData/list-perso/list-perso.component';
import {MatButtonToggleModule} from '@angular/material';
import { AdminComponent } from './admin/admin/admin.component';
import { DragAndDropDirective } from './admin/drag-and-drop.directive';
import { ImportComponent } from './admin/import/import.component';
import {MatButtonModule} from '@angular/material/button';
import {AuthModule} from './admin/auth/auth.module';
import { DepartmentComponent } from './admin/department/department.component';
import { DepartmentItemComponent } from './admin/department/department-item/department-item.component';
import { DialogUpdateOfficeComponent } from './dialog/dialog-update-office/dialog-update-office.component';
import { FormOfficeComponent } from './form/form-office/form-office.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DepartmentItemHeaderComponent } from './admin/department/department-item-header/department-item-header.component';
import { DatePickerComponent } from './shared/components/date-picker/date-picker.component';
import { CustomValidatorDirective } from './shared/validator/custom-validator.directive';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { ModalErrorComponent } from './modal/modal-error/modal-error.component';
import { FormOfficeErrorComponent } from './form/form-office-error/form-office-error.component';
import {MatSelectModule} from '@angular/material/select';
import { FormPersoneErrorComponent } from './form/form-persone-error/form-persone-error.component';
import { FormErrorComponent } from './form/form-error/form-error.component';
import {ReportErrorService} from './shared/services/reportError.service';
import { FormCompteComponent } from './admin/FormCompte/formCompte.component';
import {CompteComponent} from './admin/compte/compte.component';
import { TeamComponent } from './admin/department/team/team.component';
import {MatRadioModule} from '@angular/material/radio';
import {ExportComponent} from './admin/export/export.component';
import {ExportService} from './shared/services/export.service';

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
        NbDatepickerModule,
        MatSelectModule,
        MatRadioModule,
        NbToggleModule,
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
        DatePickerComponent,
        CustomValidatorDirective,
        CarouselComponent,
        ModalErrorComponent,
        FormOfficeErrorComponent,
        FormPersoneErrorComponent,
        FormErrorComponent,
        FormCompteComponent,
        CompteComponent,
        TeamComponent,
        ExportComponent,
    ],
    providers: [
        OfficePipePipe,
        StrangerPipe,
        ZombiePipe,
        BuildingFloorPipe,
        StateOfficePipe,
        AutoCompletePipe,
        RoleProviderService,
        ReportErrorService,
        SearchByNPipe,
        StatusPipe,
        AutoCompletePipeP,
        CustomValidatorDirective,
        ExportService,
    ],
    entryComponents: [
        DialogAssignementComponent,
        DialogUpdateOfficeComponent,
        DetailOfficeComponent,
        WarningPopupComponent,
    ],
})
export class OfficeModule { }
