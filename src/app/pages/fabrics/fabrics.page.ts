import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fabrics',
  templateUrl: './fabrics.page.html',
  styleUrls: ['./fabrics.page.scss'],
})
export class FabricsPage implements OnInit {

  // images = ['3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
  sliderOpts = {

    zoom: {maxRatio:3},
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true

  };

  constructor( private menu: MenuController,private popoverCtrl: PopoverController, private router: Router) { 
    this.menu.enable(true, 'first');
  }

  ngOnInit() {
  }

  skfab(){
    this.router.navigate(['/skfab']);
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
