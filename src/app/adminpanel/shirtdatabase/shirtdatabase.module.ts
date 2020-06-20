import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ShirtdatabasePage } from './shirtdatabase.page';
import { ShirtdatabasePageRoutingModule } from './shirtdatabase-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtdatabasePageRoutingModule
    
  ],
  declarations: [ShirtdatabasePage],
  entryComponents: [ShirtdatabasePage]
})
export class ShirtdatabasePageModule {}
