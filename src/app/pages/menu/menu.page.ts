import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  allet: any;

  constructor(private asAuth: AngularFireAuth, private router: Router, private toast: ToastController) { }

  ngOnInit() {
  }
  signout() {
    this.asAuth.auth.signOut();
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
