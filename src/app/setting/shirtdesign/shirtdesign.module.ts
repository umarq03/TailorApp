import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtdesignPageRoutingModule } from './shirtdesign-routing.module';

import { ShirtdesignPage } from './shirtdesign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtdesignPageRoutingModule
  ],
  declarations: [ShirtdesignPage]
})
export class ShirtdesignPageModule {}
