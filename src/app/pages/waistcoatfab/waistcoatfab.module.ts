import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaistcoatfabPageRoutingModule } from './waistcoatfab-routing.module';

import { WaistcoatfabPage } from './waistcoatfab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaistcoatfabPageRoutingModule
  ],
  declarations: [WaistcoatfabPage]
})
export class WaistcoatfabPageModule {}
