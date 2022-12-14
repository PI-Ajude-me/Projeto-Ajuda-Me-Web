import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DropdownModule } from "primeng/dropdown";
import { HomepageComponent } from './homepage/homepage.component';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RadioButtonModule } from 'primeng/radiobutton';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AccordionModule } from 'primeng/accordion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjudarComponent } from './dashboard/pages/ajudar/ajudar.component';
import { PedirComponent } from './dashboard/pages/pedir/pedir.component';
import { AdminComponent } from './dashboard/pages/admin/admin.component';
import { DialogModule } from 'primeng/dialog';
import { UserpedirComponent } from './dashboard/pages/userpedir/userpedir.component';
import { AdmAdminComponent } from './dashboard/pages/adm-admin/adm-admin.component';
import { AjudaTablePedirComponent } from './dashboard/components/ajuda-table-pedir/ajuda-table-pedir.component';
import { CommonModule } from '@angular/common';
import { PedirFormComponent } from './dashboard/components/pedir-form/pedir-form.component';
import { AjudarButtonsComponent } from './dashboard/components/ajudar-buttons/ajudar-buttons.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginService } from 'src/service/login.service';
import { HttpInterceptorAuth } from '../shared/http-interceptor';
import { AuthGuardService } from '../shared/auth-guard-service';
import {ToastModule} from 'primeng/toast';
import { NgPipesModule } from 'ngx-pipes';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    LoginComponent,
    AboutComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    AjudarComponent,
    PedirComponent,
    AdminComponent,
    UserpedirComponent,
    AdmAdminComponent,
    AjudaTablePedirComponent,
    RegisterComponent,
    PedirFormComponent,
    AjudarButtonsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    DropdownModule,
    MenubarModule,
    CarouselModule,
    RadioButtonModule,
    AccordionModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    DialogModule,
    ToastModule,
    NgPipesModule
  ],
  providers: [
    LoginService,AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorAuth,
      multi: true
    },

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule {

}