import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwopiecePageRoutingModule } from './twopiece-routing.module';

import { TwopiecePage } from './twopiece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwopiecePageRoutingModule
  ],
  declarations: [TwopiecePage]
})
export class TwopiecePageModule {}
