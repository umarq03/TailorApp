import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddesignPageRoutingModule } from './addesign-routing.module';

import { AddesignPage } from './addesign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddesignPageRoutingModule
  ],
  declarations: [AddesignPage]
})
export class AddesignPageModule {}
