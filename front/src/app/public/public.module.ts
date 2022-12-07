import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PublicRoutingModule } from './public-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    PublicHomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class PublicModule { }
