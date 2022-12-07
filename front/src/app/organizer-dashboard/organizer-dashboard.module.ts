import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizerDashboardRoutingModule } from './organizer-dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component'; 
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    DashboardHomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    OrganizerDashboardRoutingModule,
  ]
})
export class OrganizerDashboardModule { }
