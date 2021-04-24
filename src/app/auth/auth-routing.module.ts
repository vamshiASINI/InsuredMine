import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: 'auth', children: [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
