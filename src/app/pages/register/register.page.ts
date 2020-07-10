import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { AlertController, ToastController, MenuController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // validations_form: FormGroup;
  // errorMessage: string = '';
  // successMessage: string = '';

  allet: any;
  alet:any;
  email: string
  password: string

  // validation_messages = {
  //   'email': [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Enter a valid email.' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required.' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
  //   ]
  // };

  constructor(private router: Router, private alert: AlertController,
    private dataAuth: AngularFireAuth, private toast: ToastController,
     private menu: MenuController, private loadingCtrl: LoadingController,
     private authservice: AuthServiceService, private formbuilder: FormBuilder,
     private navCtrl: NavController) {

      this.menu.swipeGesture(false);
    }

  ngOnInit() {
  }
  

  async getregister() {
    try {
     
      const loading = await this.presentLoading();
      const { email, password } = this
      const res = await this.dataAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
    
      this.AllertAll("Signing Up Successfully", "Please Login");
      this.loadingCtrl.dismiss(); 
      console.log("Response", res);
      this.router.navigate(['/login']);

    } catch (error) {
      this.loadingCtrl.dismiss(); 
      this.AllertAl('Invalid email, password,',error.message);
        console.dir("Error", error.message);
    }
  }

  async AllertAll(header: string, message: string) {

    this.allet = await this.toast.create({

      header: header,
      message: message,
      // buttons: ['ok']
      duration: 3000,
      color:'success'
    })

    await this.allet.present();

  }
  async AllertAl(header: string, message: string) {

    this.alet = await this.toast.create({

      header: header,
      message: message,
      // buttons: ['ok']
      duration: 3000,
      color:'danger'
    })

    await this.alet.present();

  }

  async presentLoading() {
    console.log('starting loading');
     const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Signing you up, Please Wait'
    });
    return await loading.present();
  }


}
