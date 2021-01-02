import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserGridModule} from "./user-grid/user-grid.module";
import {UserGridConfiguration} from "./user-grid/models/configurations/user-grid-configuration";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserGridModule.forRoot(new UserGridConfiguration('http://localhost:8080/api/player')),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
