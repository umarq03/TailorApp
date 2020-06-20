import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KurtadesignsPageRoutingModule } from './kurtadesigns-routing.module';

import { KurtadesignsPage } from './kurtadesigns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KurtadesignsPageRoutingModule
  ],
  declarations: [KurtadesignsPage]
})
export class KurtadesignsPageModule {}
