import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditfabricPageRoutingModule } from './editfabric-routing.module';

import { EditfabricPage } from './editfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditfabricPageRoutingModule
  ],
  declarations: [EditfabricPage]
})
export class EditfabricPageModule {}
