import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KameezdesignsPageRoutingModule } from './kameezdesigns-routing.module';

import { KameezdesignsPage } from './kameezdesigns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KameezdesignsPageRoutingModule
  ],
  declarations: [KameezdesignsPage]
})
export class KameezdesignsPageModule {}
