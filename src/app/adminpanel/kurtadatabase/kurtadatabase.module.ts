import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { KurtadatabasePage } from './kurtadatabase.page';
import { KurtadatabasePageRoutingModule } from './kurtadatabase-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KurtadatabasePageRoutingModule
  ],
  declarations: [KurtadatabasePage],
  entryComponents: [KurtadatabasePage]
})
export class KurtadatabasePageModule {}
