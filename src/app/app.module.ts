import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { YoutubeLayoutComponent } from './components/layout/youtube-layout/youtube-layout.component';
import { UsersComponent } from './containers/users/users.component';
import { PostComponent } from './containers/post/post.component';
import {MaterialModule} from "./material.module";
import {HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    YoutubeLayoutComponent,
    UsersComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
