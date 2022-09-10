import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KurtafabPageRoutingModule } from './kurtafab-routing.module';

import { KurtafabPage } from './kurtafab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KurtafabPageRoutingModule
  ],
  declarations: [KurtafabPage]
})
export class KurtafabPageModule {}
