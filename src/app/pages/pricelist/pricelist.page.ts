import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';
@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.page.html',
  styleUrls: ['./pricelist.page.scss'],
})
export class PricelistPage implements OnInit {

  constructor( private menu: MenuController, private popoverCtrl: PopoverController) {
    this.menu.enable(true, 'first');
   }

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
