import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ShirtdatabasePage } from './shirtdatabase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ShirtdatabasePage],
  entryComponents: [ShirtdatabasePage]
})
export class ShirtdatabasePageModule {}
