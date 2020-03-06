/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {NbRoleProvider, NbSecurityModule} from '@nebular/security';
import {RoleProviderService} from './office/shared/services/role-provider.service';
import {DevGuardService} from './office/shared/services/guards/dev-guard.service';
import {UserGuardService} from './office/shared/services/guards/user-guard.service';
import {GuestGuardService} from './office/shared/services/guards/guest-guard.service';
import {LeaderGuardService} from './office/shared/services/guards/leader-guard.service';
import {baseUrl} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        // TODO: Update this when backend auth works.
        NbPasswordAuthStrategy.setup({
          name: 'username',
          token: {
            class: NbAuthJWTToken,
            // this parameter tells where to look for the token
          },

          baseEndpoint: baseUrl(),
          login: {
            // ...
            endpoint: 'login',
            method: 'post',
          },
        }),
      ],
      forms: {},
    }),
    NbSecurityModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: NbRoleProvider,
      useClass: RoleProviderService,
    },
    DevGuardService,
    UserGuardService,
    GuestGuardService,
    LeaderGuardService,
  ],
})
export class AppModule {
}
