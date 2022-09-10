import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkfabPageRoutingModule } from './skfab-routing.module';

import { SkfabPage } from './skfab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkfabPageRoutingModule
  ],
  declarations: [SkfabPage]
})
export class SkfabPageModule {}
