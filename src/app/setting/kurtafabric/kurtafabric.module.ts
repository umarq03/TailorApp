import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KurtafabricPageRoutingModule } from './kurtafabric-routing.module';

import { KurtafabricPage } from './kurtafabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KurtafabricPageRoutingModule
  ],
  declarations: [KurtafabricPage]
})
export class KurtafabricPageModule {}
