import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtdesignsPageRoutingModule } from './shirtdesigns-routing.module';

import { ShirtdesignsPage } from './shirtdesigns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtdesignsPageRoutingModule
  ],
  declarations: [ShirtdesignsPage]
})
export class ShirtdesignsPageModule {}
