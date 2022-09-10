import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantdesignPageRoutingModule } from './pantdesign-routing.module';

import { PantdesignPage } from './pantdesign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantdesignPageRoutingModule
  ],
  declarations: [PantdesignPage]
})
export class PantdesignPageModule {}
