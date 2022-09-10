import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantfabricPageRoutingModule } from './pantfabric-routing.module';

import { PantfabricPage } from './pantfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantfabricPageRoutingModule
  ],
  declarations: [PantfabricPage]
})
export class PantfabricPageModule {}
