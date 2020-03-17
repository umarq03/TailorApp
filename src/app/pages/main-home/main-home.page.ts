import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, MenuController, PopoverController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';
import { PopoverComponent } from 'src/app/popover/popover.component';


@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit {

  allet: any;
  present:any;

  constructor
    (private astoast: ToastController,
      private asAuth: AngularFireAuth,
      private navCtrl: NavController,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private menu: MenuController,
      private toast: ToastController,
      private popoverCtrl: PopoverController,
     ) {
        
        // this.menu.enable(true, 'first');
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

  
  
  // signout() {
  //   this.asAuth.auth.signOut();
  //   this.AllertAll("Signed Out Successfully", "");
  //   this.router.navigate(['/home']);
  // }
  // async AllertAll(header: string, message: string) {

  //   this.allet = await this.toast.create({

  //     header: header,
  //     message: message,
  //     // buttons: ['ok']
  //     duration: 3000
  //   })
  //   await this.allet.present();
  // }

 

}
