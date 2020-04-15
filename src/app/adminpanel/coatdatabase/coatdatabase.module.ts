import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CoatdatabasePage } from './coatdatabase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [CoatdatabasePage],
  entryComponents: [CoatdatabasePage]
})
export class CoatdatabasePageModule {}
