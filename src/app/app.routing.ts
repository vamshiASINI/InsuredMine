import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth-guard.module';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';



export const AppRoutes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path: "Home", component: HomeComponent},
  {path:'Aboutus', pathMatch:'full',component:AboutusComponent},


  { path: '',      component: DashboardComponent,canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: 'dashboard',
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, { enableTracing: true })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
