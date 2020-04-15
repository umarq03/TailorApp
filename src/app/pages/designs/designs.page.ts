import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController, NavParams } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-designs',
  templateUrl: './designs.page.html',
  styleUrls: ['./designs.page.scss'],
})
export class DesignsPage implements OnInit {
// url: any  ;

  constructor( private menu: MenuController,private popoverCtrl: PopoverController, 
    private navparam: NavParams, public activeRoute: ActivatedRoute) { 

      this.menu.swipeGesture(false);
    
  }

  ngOnInit() {

    // this.url = this.activeRoute.snapshot.paramMap.getAll('url');
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
