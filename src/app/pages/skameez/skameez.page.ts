import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, MenuController,
LoadingController,PopoverController } from '@ionic/angular';
import { analytics } from 'firebase';
import { PopoverComponent } from 'src/app/popover/popover.component';
import {Router} from '@angular/router';


// import { SkfabPage } from '../skfab/skfab.page';
@Component({
  selector: 'app-skameez',
  templateUrl: './skameez.page.html',
  styleUrls: ['./skameez.page.scss'],
})
export class SKameezPage implements OnInit {

  constructor( private menu: MenuController,
    private popoverCtrl: PopoverController,public router: Router) 
    { 
    // this.menu.enable(false, 'first');
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
  // Submit(){
  //   this.ro("/home") 

  // }
  form ={}
  Measurment(){
    console.log(this.form);
  }
}
