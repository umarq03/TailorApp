import { Component, OnInit } from '@angular/core';
import { DatabaseService, emailSetting , skfab} from 'src/app/services/database.service';
import {
  ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Chooser, ChooserResult } from '@ionic-native/chooser/ngx';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-email-setting',
  templateUrl: './email-setting.page.html',
  styleUrls: ['./email-setting.page.scss'],
})
export class EmailSettingPage implements OnInit {
  disablebtn;

  idea: emailSetting = {
    email:''
  }

  constructor(public navparam: NavParams,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private database: DatabaseService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private chooser: Chooser,
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private cartitem: CartService) { 
    }

    ionviewDidEnter() {
      this.disablebtn = false;
    }

    ionViewWillEnter() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.database.getEmailSetting(id).subscribe(idea => {
          this.idea = idea;
          this.loadData2();
        });
      }
    }
    async updateIdea() {
      if(this.idea.email == ""){
        this.showToast('email required')
      }else{
        this.disablebtn = true;
      const loading = await this.loadingCtrl.create({
        spinner: 'circles',
        keyboardClose: true,
        message: 'Updating Settings...'
      });
      await loading.present();
  
      this.database.updateemailSetting(this.idea).then(()=> {
        this.router.navigateByUrl('/main-setting');
        loading.dismiss();
        this.showToast('Email setting updated!');
      }, err => {
        this.showToast('There was a problem updating your updating setting! :(');
      });
    }
    }

  save() {
    if(this.idea.email == ""){
      this.showToast('email required')
    }else{
      this.disablebtn = true;
        this.database.addEmailSetting(this.idea).then(() => {
          this.loadData();
          this.router.navigateByUrl('/main-setting');
          this.showToast('Email setting saved!')
        }, err => {
          this.showToast('SomeWent wrong to save setting! :(');
        });
      }
      }

  ngOnInit() {
  }
  
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Changing setting, please wait..',
      duration: 1000
    });
    await loading.present();
    {
    }

  }

  async loadData2() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Loading...',
      duration: 1000
    });
    await loading.present();
    {
     
    }

  }


}
