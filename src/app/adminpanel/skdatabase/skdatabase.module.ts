import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SkdatabasePage } from './skdatabase.page';
import { SkdatabasePageRoutingModule } from './skdatabase-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkdatabasePageRoutingModule
  ],
  declarations: [SkdatabasePage],
  entryComponents: [SkdatabasePage]
})
export class SkdatabasePageModule {}
