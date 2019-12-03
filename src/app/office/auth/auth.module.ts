import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbInputModule, NbSpinnerModule,
} from '@nebular/theme';
import {AuthRoutingModule} from './auth-routing.module';
import {OfficeModule} from '../office.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
    AuthRoutingModule,
    OfficeModule,
    NbSpinnerModule,
    NbCardModule,
  ],
  declarations: [
    // ... here goes our new components
    LoginComponent,
    LogoutComponent,
  ],
})
export class AuthModule {
}
