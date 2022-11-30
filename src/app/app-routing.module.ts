import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent} from './dashboard/pages/admin/admin.component';
import { AjudarComponent } from './dashboard/pages/ajudar/ajudar.component';
import { PedirComponent } from './dashboard/pages/pedir/pedir.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserpedirComponent } from './dashboard/pages/userpedir/userpedir.component';
import { AdmAdminComponent } from './dashboard/pages/adm-admin/adm-admin.component';
import { AjudaTablePedirComponent } from './dashboard/components/ajuda-table-pedir/ajuda-table-pedir.component';
import { AuthGuardService } from 'src/shared/auth-guard-service';




const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
  { path: 'pedir', component: PedirComponent ,canActivate: [AuthGuardService] },
  { path: 'ajudar', component: AjudarComponent,canActivate: [AuthGuardService] },
  { path: 'userpedir', component: UserpedirComponent,canActivate: [AuthGuardService] },
  { path: 'adm-admin', component: AdmAdminComponent,canActivate: [AuthGuardService] },
  { path: 'ajuda-table-pedir', component: AjudaTablePedirComponent,canActivate: [AuthGuardService] },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
