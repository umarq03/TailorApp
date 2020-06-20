import { Component, OnInit } from '@angular/core';
import { DatabaseService, titleSetting } from 'src/app/services/database.service';
import {
  ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-title-setting',
  templateUrl: './title-setting.page.html',
  styleUrls: ['./title-setting.page.scss'],
})
export class TitleSettingPage implements OnInit {
  disablebtn;

  idea: titleSetting = {
    title:'',
    subtitle1:'',
    subtitle2: ''
  }

  constructor( public navparam: NavParams,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private database: DatabaseService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,) { }

    ionviewDidEnter() {
      this.disablebtn = false;
    }

    ionViewWillEnter() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.database.getTitleSetting(id).subscribe(idea => {
          this.idea = idea;
          this.loadData2();
        });
      }
    }
    async updateIdea() {
      if(this.idea.title == ""){
        this.showToast('title required')
      }else if(this.idea.subtitle1 == ""){
        this.showToast('subtitle1 requird')
      }else if(this.idea.subtitle2 == ""){
        this.showToast('subtitle2 requird')
      }else{
        this.disablebtn = true;
      const loading = await this.loadingCtrl.create({
        spinner: 'circles',
        keyboardClose: true,
        message: 'Updating Settings...'
      });
      await loading.present();
  
      this.database.updatetitleSetting(this.idea).then(() => {
        this.router.navigateByUrl('/main-setting');
        loading.dismiss();
        this.showToast('Title setting updated!');
      }, err => {
        this.showToast('There was a problem updating your updating setting! :(');
      });
    }
    }

  save() {
    if(this.idea.title == ""){
      this.showToast('title required')
    }else if(this.idea.subtitle1 == ""){
      this.showToast('subtitle1 requird')
    }else if(this.idea.subtitle2 == ""){
      this.showToast('subtitle2 requird')
    }else{
      this.disablebtn = true;
        this.database.addTitleSetting(this.idea).then(() => {
          this.loadData();
          this.router.navigateByUrl('/main-setting');
          this.showToast('Title setting saved!')
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
