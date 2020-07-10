import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { AlertController, ToastController, MenuController, LoadingController, NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { async } from 'q';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // validations_form: FormGroup;
  // errorMessage: string = '';

  email: string = '';
  password: string = '';
  disabledbtn;
  user: any;
  alluser: any;
  aluser: any;
  loader: any;
  constructor(private router: Router, private dataAuth: AngularFireAuth, private allert: AlertController,
    private toast: ToastController, private menu: MenuController, private loadingCtrl: LoadingController,
    private authservice: AuthServiceService, private formbuilder: FormBuilder, private navCtrl: NavController) {

    this.menu.swipeGesture(false);
  }
  ngOnInit() {
   
  }


  ionViewDidEnter(){
    this.disabledbtn = false;
  }


  getregister() {

    this.router.navigate(['/register']);
  }

  async getlogin() {
    try {

      const loading = await this.presentLoading();
      const { email, password } = this;
      const user = await this.dataAuth.auth.signInWithEmailAndPassword(this.email, this.password)
    
      this.AllertAll("Signing you in Successfully", this.email);
      this.loadingCtrl.dismiss();  
      this.router.navigate(['/main-home']);
      console.log(user);


    } catch (error) {
      this.loadingCtrl.dismiss();   
      this.AllertAl('Invalid email, password,',error.message);
      console.dir("Error", error.message);
    }

  }

  async AllertAll(header: string, message: string) {
    this.alluser = await this.toast.create({

      header: header,
      message: message,
      // buttons: ['ok']
      duration: 3000,
      color:'success'
    })

    await this.alluser.present();


  }
  async AllertAl(header: string, message: string) {
    this.aluser = await this.toast.create({

      header: header,
      message: message,
      // buttons: ['ok']
      duration: 3000,
      color:'danger'
    })

    await this.aluser.present();


  }
  async presentLoading() {
    console.log('starting loading');
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Authenticating, Please Wait'
    });
    return await loading.present();
  }




}
