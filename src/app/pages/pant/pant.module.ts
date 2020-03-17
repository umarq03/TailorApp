import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantPageRoutingModule } from './pant-routing.module';

import { PantPage } from './pant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantPageRoutingModule
  ],
  declarations: [PantPage]
})
export class PantPageModule {}
