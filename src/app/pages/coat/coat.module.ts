import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoatPageRoutingModule } from './coat-routing.module';

import { CoatPage } from './coat.page';
import { SMS } from '@ionic-native/sms/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoatPageRoutingModule
  ],
  providers:[SMS],
  declarations: [CoatPage]
})
export class CoatPageModule {}
