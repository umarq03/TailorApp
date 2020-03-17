import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreepiecePageRoutingModule } from './threepiece-routing.module';

import { ThreepiecePage } from './threepiece.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreepiecePageRoutingModule
  ],
  declarations: [ThreepiecePage]
})
export class ThreepiecePageModule {}
