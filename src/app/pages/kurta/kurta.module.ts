import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KurtaPageRoutingModule } from './kurta-routing.module';

import { KurtaPage } from './kurta.page';
import { SMS } from '@ionic-native/sms/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KurtaPageRoutingModule
  ],
  providers:[SMS],
  declarations: [KurtaPage]
})
export class KurtaPageModule {}
