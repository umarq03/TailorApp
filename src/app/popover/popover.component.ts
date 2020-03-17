import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController, NavParams, PopoverController } from '@ionic/angular';
// import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  allet:any;

  constructor(private asAuth: AngularFireAuth, private router: Router, private toast: ToastController,
    private viewparam: NavParams, private popover: PopoverController) { }

  ngOnInit() {}



  async signout() {
    this.asAuth.auth.signOut();
    await this.popover.dismiss();
    this.AllertAll("Signed Out Successfully", "");
    this.router.navigate(['/home']);
  }
  async AllertAll(header: string, message: string) {

    this.allet = await this.toast.create({

      header: header,
      message: message,
      // buttons: ['ok']
      duration: 3000
    })
    await this.allet.present();
  }

}
