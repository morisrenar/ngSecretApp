import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {VideoCenterComponent} from "./videos-center/video-center.component";
import {FacilitiesCenterComponent} from "./facilities-center/facilities-center.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'videos', component: VideoCenterComponent },
  { path: 'facilities', component: FacilitiesCenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
