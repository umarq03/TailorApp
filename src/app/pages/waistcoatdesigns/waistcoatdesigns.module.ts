import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaistcoatdesignsPageRoutingModule } from './waistcoatdesigns-routing.module';

import { WaistcoatdesignsPage } from './waistcoatdesigns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaistcoatdesignsPageRoutingModule
  ],
  declarations: [WaistcoatdesignsPage]
})
export class WaistcoatdesignsPageModule {}
