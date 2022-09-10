import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabricsPageRoutingModule } from './fabrics-routing.module';

import { FabricsPage } from './fabrics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabricsPageRoutingModule
  ],
  declarations: [FabricsPage]
})
export class FabricsPageModule {}
