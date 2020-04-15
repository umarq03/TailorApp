import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricelistPageRoutingModule } from './pricelist-routing.module';
import { PricelistPage } from './pricelist.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricelistPageRoutingModule,
    RouterModule.forChild([
      {
        path:'',
        component: PricelistPage
      }
    ])
  ],
  declarations: [PricelistPage],
})
export class PricelistPageModule {}
