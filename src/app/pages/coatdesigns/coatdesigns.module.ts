import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoatdesignsPageRoutingModule } from './coatdesigns-routing.module';

import { CoatdesignsPage } from './coatdesigns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoatdesignsPageRoutingModule
  ],
  declarations: [CoatdesignsPage]
})
export class CoatdesignsPageModule {}
