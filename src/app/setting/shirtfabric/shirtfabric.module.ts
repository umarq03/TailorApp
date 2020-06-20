import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtfabricPageRoutingModule } from './shirtfabric-routing.module';

import { ShirtfabricPage } from './shirtfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtfabricPageRoutingModule
  ],
  declarations: [ShirtfabricPage]
})
export class ShirtfabricPageModule {}
