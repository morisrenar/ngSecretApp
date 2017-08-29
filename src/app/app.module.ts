import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './videos-center/video-center.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import {VideoService} from "./service/video.service";
import {Http, HttpModule} from "@angular/http";
import { FacilitiesCenterComponent } from './facilities-center/facilities-center.component';
import { FacilitiesListComponent } from './facilities-list/facilities-list.component';
import { FacilitiesDetailsComponent } from './facilities-details/facilities-details.component';
import {FacilitiesService} from "./service/facilities.service";
import { SignInComponent } from './sign-in/sign-in.component';
import {UserService} from "./service/user.service";
import {AuthService} from "./service/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCenterComponent,
    VideoListComponent,
    VideoDetailComponent,
    FacilitiesCenterComponent,
    FacilitiesListComponent,
    FacilitiesDetailsComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [VideoService, FacilitiesService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
