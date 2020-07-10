import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkdesignPageRoutingModule } from './skdesign-routing.module';

import { SkdesignPage } from './skdesign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkdesignPageRoutingModule
  ],
  declarations: [SkdesignPage]
})
export class SkdesignPageModule {}
