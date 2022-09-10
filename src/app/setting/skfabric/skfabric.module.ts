import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkfabricPageRoutingModule } from './skfabric-routing.module';

import { SkfabricPage } from './skfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkfabricPageRoutingModule
  ],
  declarations: [SkfabricPage]
})
export class SkfabricPageModule {}
