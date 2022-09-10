import { Component, OnInit } from '@angular/core';
import { DatabaseService, starterSetting } from 'src/app/services/database.service';
import {
  ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-starter-setting',
  templateUrl: './starter-setting.page.html',
  styleUrls: ['./starter-setting.page.scss'],
})
export class StarterSettingPage implements OnInit {
  disablebtn;

  idea: starterSetting = {
    maintitle:'',
    message:''
  }
    
  constructor(public navparam: NavParams,
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
        this.database.getStarterSetting(id).subscribe(idea => {
          this.idea = idea;
          this.loadData2();
        });
      }
    }
    async updateIdea() {
      if(this.idea.maintitle == ""){
        this.showToast('maintitle required')
      }else if(this.idea.message == ""){
        this.showToast('message requird')
      }else{
        this.disablebtn = true;
      const loading = await this.loadingCtrl.create({
        spinner: 'circles',
        keyboardClose: true,
        message: 'Updating Settings...'
      });
      await loading.present();
  
      this.database.updatestarterSetting(this.idea).then(() => {
        this.router.navigateByUrl('/main-setting');
        loading.dismiss();
        this.showToast('Starter setting updated!');
      }, err => {
        this.showToast('There was a problem updating your updating setting! :(');
      });
    }
    }

  save() {
        this.database.addStarterSetting(this.idea).then(() => {
          this.loadData();
          this.router.navigateByUrl('/main-setting');
          this.showToast('Starter setting saved!')
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
      duration:1000
    });
    await loading.present();
    {
      
    }

  }

}
