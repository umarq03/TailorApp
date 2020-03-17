import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KurtaPageRoutingModule } from './kurta-routing.module';

import { KurtaPage } from './kurta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KurtaPageRoutingModule
  ],
  declarations: [KurtaPage]
})
export class KurtaPageModule {}
