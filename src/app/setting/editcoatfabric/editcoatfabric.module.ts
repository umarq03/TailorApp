import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditcoatfabricPageRoutingModule } from './editcoatfabric-routing.module';

import { EditcoatfabricPage } from './editcoatfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditcoatfabricPageRoutingModule
  ],
  declarations: [EditcoatfabricPage]
})
export class EditcoatfabricPageModule {}
