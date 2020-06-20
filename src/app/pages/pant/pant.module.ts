import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantPageRoutingModule } from './pant-routing.module';

import { PantPage } from './pant.page';
import { SMS } from '@ionic-native/sms/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantPageRoutingModule
  ],
  providers:[SMS],
  declarations: [PantPage]
})
export class PantPageModule {}
