import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CoatdatabasePage } from './coatdatabase.page';
import { CoatdatabasePageRoutingModule } from './coatdatabase-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoatdatabasePageRoutingModule
  
  ],
  declarations: [CoatdatabasePage],
  entryComponents: [CoatdatabasePage]
})
export class CoatdatabasePageModule {}
