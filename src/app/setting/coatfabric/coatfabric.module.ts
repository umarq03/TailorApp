import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoatfabricPageRoutingModule } from './coatfabric-routing.module';

import { CoatfabricPage } from './coatfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoatfabricPageRoutingModule
  ],
  declarations: [CoatfabricPage]
})
export class CoatfabricPageModule {}
