import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { AlertController, ToastController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  allet: any;
  email: string
  password: string

  // user = {} as User;

  constructor(private router: Router, private alert: AlertController, 
    private dataAuth: AngularFireAuth, private toast: ToastController, private menu: MenuController) { 
      
      this.menu.enable(false, 'first');
    }

  ngOnInit() {
  }
  async getregister() {
    try {

      const { email, password } = this
      const res = await this.dataAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      this.AllertAll("Signed Up It Successful", "");
      console.log("Response", res);
      this.router.navigate(['/login']);

    } catch (error) {

      this.AllertAll("Some Went Error", error.message);
      console.log("MEG_ERROR", error);
      console.dir("Error", error.message);
    }
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
