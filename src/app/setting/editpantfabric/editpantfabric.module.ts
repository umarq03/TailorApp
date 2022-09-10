import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpantfabricPageRoutingModule } from './editpantfabric-routing.module';

import { EditpantfabricPage } from './editpantfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpantfabricPageRoutingModule
  ],
  declarations: [EditpantfabricPage]
})
export class EditpantfabricPageModule {}
