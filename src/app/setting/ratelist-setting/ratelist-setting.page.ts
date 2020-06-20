import { Component, OnInit } from '@angular/core';
import { DatabaseService, rateList, morerateList } from 'src/app/services/database.service';
import {
  ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams, AlertController
} from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ratelist-setting',
  templateUrl: './ratelist-setting.page.html',
  styleUrls: ['./ratelist-setting.page.scss'],
})
export class RatelistSettingPage implements OnInit {
  disablebtn;
  idea: rateList = {
    skameez:'',
    skameezdouble:'',
    shirt:'',
    pant:'',
    kurta:'',
    kurtadouble:'',
    wcoat:'',
    coat:'',
    twopiece:'',
    threepiece:''
  }
  private morerateList: Observable<morerateList[]>;

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
        this.database.getRateList(id).subscribe(idea => {
          this.idea = idea;
          this.loadData2();
        });
      }
    }
    async updateIdea() {
      if(this.idea.skameez == ""){
        this.showToast('skameez required')
      }else if(this.idea.skameezdouble == ""){
        this.showToast('skameezdouble requird')
      }else if(this.idea.shirt == ""){
        this.showToast('shirt requird')
      }else if(this.idea.pant == ""){
        this.showToast('pant required')
      }
      else if(this.idea.kurta == ""){
        this.showToast('kurta required')
      }
      else if(this.idea.kurtadouble == ""){
        this.showToast('kurtadouble required')
      }
      else if(this.idea.wcoat == ""){
        this.showToast('wcoat required')
      }
      else if(this.idea.coat == ""){
        this.showToast('coat required')
      }
      else if(this.idea.twopiece == ""){
        this.showToast('twopiece required')
      }
      else if(this.idea.threepiece == ""){
        this.showToast('threepiece required')
      }
      else{
        this.disablebtn = true;
      const loading = await this.loadingCtrl.create({
        spinner: 'circles',
        keyboardClose: true,
        message: 'Updating Settings...'
      });
      await loading.present();
  
      this.database.updaterateList(this.idea).then(() => {
        this.router.navigateByUrl('/main-setting');
        loading.dismiss();
        this.showToast('rateList setting updated!');
      }, err => {
        this.showToast('There was a problem updating your updating setting! :(');
      });
    }
    }

  save() {
    
      this.disablebtn = true;
        this.database.addRateList(this.idea).then(() => {
          this.loadData();
          this.router.navigateByUrl('/main-setting');
          this.showToast('Ratelist setting saved!')
        }, err => {
          this.showToast('SomeWent wrong to save setting! :(');
        });
      }

      ngOnInit() {
        this.morerateList = this.database.getMoreRateLists();
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
  add(){
    this.router.navigateByUrl('/more-ratelist')
  }


}
