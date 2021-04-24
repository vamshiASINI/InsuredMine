import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';

import { CoreModule } from '../core/core.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  exports: [
    AuthComponent,
  ]
})
export class AuthModule { }
