import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoatPageRoutingModule } from './coat-routing.module';

import { CoatPage } from './coat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoatPageRoutingModule
  ],
  declarations: [CoatPage]
})
export class CoatPageModule {}
