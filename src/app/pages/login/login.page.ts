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
  loader: any;
  constructor(private router: Router, private dataAuth: AngularFireAuth, private allert: AlertController,
    private toast: ToastController, private menu: MenuController, private loadingCtrl: LoadingController,
    private authservice: AuthServiceService, private formbuilder: FormBuilder, private navCtrl: NavController) {

    this.menu.swipeGesture(false);
  }
  ngOnInit() {
    // this.validations_form = this.formbuilder.group({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required
    //   ])),
    // });
  }

  // validation_messages = {
  //   'email': [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Please enter a valid email.' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required.' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
  //   ]
  // };

  // async loginUser(value) {
  //   const loading = await this.presentLoading();
  //   this.authservice.loginUser(value)
  //     .then(res => {
  //       console.log(res);
  //       this.errorMessage = "";
  //       this.AllertAll("Signing you in Successfully", '');
  //       this.loadingCtrl.dismiss();
  //       this.navCtrl.navigateForward('/main-home');
  //     }, err => {
  //       this.errorMessage = err.message;
  //       this.loadingCtrl.dismiss(); 
  //     })
  // }

  // goToRegisterPage() {
  //   this.navCtrl.navigateForward('/register');
  // }

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
      this.AllertAll('Invalid email, password,',error.message);
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
