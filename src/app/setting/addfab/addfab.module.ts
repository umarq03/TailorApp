import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfabPageRoutingModule } from './addfab-routing.module';

import { AddfabPage } from './addfab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfabPageRoutingModule
  ],
  declarations: [AddfabPage]
})
export class AddfabPageModule {}
