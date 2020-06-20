import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtfabPageRoutingModule } from './shirtfab-routing.module';

import { ShirtfabPage } from './shirtfab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtfabPageRoutingModule
  ],
  declarations: [ShirtfabPage]
})
export class ShirtfabPageModule {}
