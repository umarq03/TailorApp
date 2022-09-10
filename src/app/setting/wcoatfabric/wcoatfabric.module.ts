import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WcoatfabricPageRoutingModule } from './wcoatfabric-routing.module';

import { WcoatfabricPage } from './wcoatfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WcoatfabricPageRoutingModule
  ],
  declarations: [WcoatfabricPage]
})
export class WcoatfabricPageModule {}
