import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoatdesignPageRoutingModule } from './coatdesign-routing.module';

import { CoatdesignPage } from './coatdesign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoatdesignPageRoutingModule
  ],
  declarations: [CoatdesignPage]
})
export class CoatdesignPageModule {}
