import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';
import {AuthRoutingModule} from './auth-routing.module';
import {OfficeModule} from '../office.module';
import { LoginComponent } from './login/login.component';


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
  ],
  declarations: [
    // ... here goes our new components
  LoginComponent],
})
export class AuthModule {
}