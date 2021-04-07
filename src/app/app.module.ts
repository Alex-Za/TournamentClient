import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserGridModule } from './user-grid/user-grid.module';
import { UserGridConfiguration } from './user-grid/models/configurations/user-grid-configuration';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {ProfileComponent} from './user/profile/profile.component';
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material-module';
import {authInterceptorProviders} from './helper/auth-interceptor.service';
import {authErrorInterceptorProviders} from './helper/error-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    ProfileComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders, authErrorInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
