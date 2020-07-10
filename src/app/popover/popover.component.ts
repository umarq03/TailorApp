import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController, NavParams, PopoverController, LoadingController } from '@ionic/angular';
// import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  constructor(private asAuth: AngularFireAuth, private router: Router, private toast: ToastController,
    private viewparam: NavParams, private popover: PopoverController, private loadingCtrl: LoadingController) { }

  ngOnInit() {}

  async signout() {
    const loading = await this.presentLoading();
    this.asAuth.auth.signOut();
    this.showToast("Signed Out Successfully");
    await this.popover.dismiss();
    this.loadingCtrl.dismiss();  
    this.router.navigate(['/home']);
  }
  async presentLoading() {
    console.log('starting loading');
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Signing you out, Please Wait',
      duration: 1000
    });
    return await loading.present();
  }
  showToast(msg) {
    this.toast.create({
      message: msg,
      duration: 2000,
      color:'success'
    }).then(toast => toast.present());
  }
}
