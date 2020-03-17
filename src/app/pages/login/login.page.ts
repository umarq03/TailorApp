import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { AlertController, ToastController, MenuController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  user: any;
  alluser: any;
  loader: any;
  constructor(private router: Router, private dataAuth: AngularFireAuth, private allert: AlertController,
    private toast: ToastController, private menu: MenuController,private loading: LoadingController ) {

      this.menu.enable(false, 'first');
  }
  ngOnInit() {
  }
  

  getregister() {

    this.router.navigate(['/register']);
  }

  async getlogin() {

    try {
      const { email, password } = this;
      const user = await this.dataAuth.auth.signInWithEmailAndPassword(this.email, this.password);
      

      this.AllertAll("Signed In Success", this.email);
      this.router.navigate(['/main-home']);
      console.log(user);


    } catch (error) {

      this.AllertAll("Some Went Error",error.message);
      console.log("MEG_ERROR", error);
      console.dir("Error", error.message);
    }

  }

  async AllertAll(header: string, message: string) {
    this.alluser = await this.toast.create({

      header: header,
      message: message,
      // buttons: ['ok']
      duration: 3000
    })

    await this.alluser.present();


  }



}
