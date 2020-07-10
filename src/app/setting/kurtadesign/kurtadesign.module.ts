import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KurtadesignPageRoutingModule } from './kurtadesign-routing.module';

import { KurtadesignPage } from './kurtadesign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KurtadesignPageRoutingModule
  ],
  declarations: [KurtadesignPage]
})
export class KurtadesignPageModule {}
