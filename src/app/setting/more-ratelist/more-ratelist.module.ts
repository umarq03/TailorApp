import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreRatelistPageRoutingModule } from './more-ratelist-routing.module';

import { MoreRatelistPage } from './more-ratelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreRatelistPageRoutingModule
  ],
  declarations: [MoreRatelistPage]
})
export class MoreRatelistPageModule {}
