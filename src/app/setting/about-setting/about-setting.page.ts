import { Component, OnInit } from '@angular/core';
import { DatabaseService, aboutSetting } from 'src/app/services/database.service';
import {
  ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-about-setting',
  templateUrl: './about-setting.page.html',
  styleUrls: ['./about-setting.page.scss'],
})
export class AboutSettingPage implements OnInit {
  disablebtn;

  idea: aboutSetting = {
    title: '',
    subtitle: '',
    message: '',
    prop: '',
    phonenumber: '',
    timing: '',
    location: ''
  }
  constructor(public navparam: NavParams,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private database: DatabaseService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController, ) { }

  ionviewDidEnter() {
    this.disablebtn = false;
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.database.getAboutSetting(id).subscribe(idea => {
        this.idea = idea;
        this.loadData2();
      });
    }
  }
  async updateIdea() {
    if (this.idea.title == "") {
      this.showToast('title required')
    } else if (this.idea.subtitle == "") {
      this.showToast('subtitle requird')
    } else if (this.idea.message == "") {
      this.showToast('message requird')
    } else if (this.idea.prop == "") {
      this.showToast('prop required')
    }
    else if (this.idea.phonenumber == "") {
      this.showToast('phonenumber required')
    }
    else if (this.idea.timing == "") {
      this.showToast('timing is required')
    }
    else if (this.idea.location == "") {
      this.showToast('location is required')
    }
    else {
      this.disablebtn = true;
      const loading = await this.loadingCtrl.create({
        spinner: 'circles',
        keyboardClose: true,
        message: 'Updating Settings...'
      });
      await loading.present();

      this.database.updateaboutSetting(this.idea).then(() => {
        this.router.navigateByUrl('/main-setting');
        loading.dismiss();
        this.showToast('About setting updated!');
      }, err => {
        this.showToast('There was a problem updating your updating setting! :(');
      });
    }
  }

  save() {

    this.disablebtn = true;
    this.database.addAboutSetting(this.idea).then(() => {
      this.loadData();
      this.router.navigateByUrl('/main-setting');
      this.showToast('About setting saved!')
    }, err => {
      this.showToast('SomeWent wrong to save setting! :(');
    });

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
