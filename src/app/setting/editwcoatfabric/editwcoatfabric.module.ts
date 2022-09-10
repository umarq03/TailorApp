import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditwcoatfabricPageRoutingModule } from './editwcoatfabric-routing.module';

import { EditwcoatfabricPage } from './editwcoatfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditwcoatfabricPageRoutingModule
  ],
  declarations: [EditwcoatfabricPage]
})
export class EditwcoatfabricPageModule {}
