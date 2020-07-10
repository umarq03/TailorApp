import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditkurtafabricPageRoutingModule } from './editkurtafabric-routing.module';

import { EditkurtafabricPage } from './editkurtafabric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditkurtafabricPageRoutingModule
  ],
  declarations: [EditkurtafabricPage]
})
export class EditkurtafabricPageModule {}
