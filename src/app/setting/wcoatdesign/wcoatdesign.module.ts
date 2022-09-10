import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WcoatdesignPageRoutingModule } from './wcoatdesign-routing.module';

import { WcoatdesignPage } from './wcoatdesign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WcoatdesignPageRoutingModule
  ],
  declarations: [WcoatdesignPage]
})
export class WcoatdesignPageModule {}
