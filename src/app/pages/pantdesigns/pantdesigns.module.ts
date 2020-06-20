import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantdesignsPageRoutingModule } from './pantdesigns-routing.module';

import { PantdesignsPage } from './pantdesigns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantdesignsPageRoutingModule
  ],
  declarations: [PantdesignsPage]
})
export class PantdesignsPageModule {}
