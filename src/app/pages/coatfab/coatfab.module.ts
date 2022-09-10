import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoatfabPageRoutingModule } from './coatfab-routing.module';

import { CoatfabPage } from './coatfab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoatfabPageRoutingModule
  ],
  declarations: [CoatfabPage]
})
export class CoatfabPageModule {}
