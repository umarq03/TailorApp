import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { KurtadatabasePage } from './kurtadatabase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [KurtadatabasePage],
  entryComponents: [KurtadatabasePage]
})
export class KurtadatabasePageModule {}
