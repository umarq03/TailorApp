import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaistcoatPageRoutingModule } from './waistcoat-routing.module';

import { WaistcoatPage } from './waistcoat.page';
import { SMS } from '@ionic-native/sms/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaistcoatPageRoutingModule
  ],
  providers:[SMS],
  declarations: [WaistcoatPage]
})
export class WaistcoatPageModule {}
