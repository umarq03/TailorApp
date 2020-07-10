import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditshirtfabricPageRoutingModule } from './editshirtfabric-routing.module';

import { EditshirtfabricPage } from './editshirtfabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditshirtfabricPageRoutingModule
  ],
  declarations: [EditshirtfabricPage]
})
export class EditshirtfabricPageModule {}
