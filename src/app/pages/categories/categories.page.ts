import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular'
import { PopoverComponent } from 'src/app/popover/popover.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor( private menu: MenuController, private popoverCtrl: PopoverController) { 
   
    // this.menu.enable(true, 'first');
  }
  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }
  

  ngOnInit() {
  }

  async optionsPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
