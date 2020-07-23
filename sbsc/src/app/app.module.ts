import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/util/layout/layout.component';
import { SidebarComponent } from './components/util/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/util/navbar/navbar.component';
import { DataCardComponent } from './components/shared/data-card/data-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    DataCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 76,
      space: -10,
      toFixed: 0,
      maxPercent: 100,
      outerStrokeWidth: 10,
      outerStrokeColor: '#1b5bac',
      innerStrokeColor: '#e2edf8',
      innerStrokeWidth: 10,
      titleColor: '#000000',
      titleFontSize: '16',
      titleFontWeight: '700',
      animationDuration: 1000,
      showSubtitle: false,
      showUnits: false,
      showBackground: false,
      clockwise: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
