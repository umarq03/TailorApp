import { Component, OnInit } from '@angular/core';
import { DatabaseService, morerateList } from 'src/app/services/database.service';
import {
  ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams, AlertController
} from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-more-ratelist',
  templateUrl: './more-ratelist.page.html',
  styleUrls: ['./more-ratelist.page.scss'],
})
export class MoreRatelistPage implements OnInit {
  disablebtn;
  private morerateList: Observable<morerateList[]>;

  idea: morerateList = {
    name:'',
    price:''
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
        this.database.getMoreRateList(id).subscribe(idea => {
          this.idea = idea;
          this.loadData2();
        });
      }
    }
    async updateIdea() {
      if(this.idea.name == ""){
        this.showToast('name required')
      }else if(this.idea.price == ""){
        this.showToast('price requird')
      }
      else{
        this.disablebtn = true;
      const loading = await this.loadingCtrl.create({
        spinner: 'circles',
        keyboardClose: true,
        message: 'Updating Settings...'
      });
      await loading.present();
  
      this.database.updatemorerateList(this.idea).then(() => {
        this.router.navigateByUrl('/main-setting');
        loading.dismiss();
        this.showToast('rateList setting updated!');
      }, err => {
        this.showToast('There was a problem updating your updating setting! :(');
      });
    }
    }
    async deleteIdea(){
      const loading = await this.loadingCtrl.create({
        spinner: 'circles',
        keyboardClose: true,
        message: 'Deleting...'
      });
      await loading.present();
      this.database.deletemoreratelist(this.idea.id).then(()=>{
        this.router.navigateByUrl('/pricelist')
        loading.dismiss();
        this.showToast('Ratelist deleted!');
      }, err =>{
          this.showToast('Somewent wrong!')
      
      })
    
    }

  save() {
    
      this.disablebtn = true;
        this.database.addMoreRateList(this.idea).then(() => {
          this.loadData();
          this.router.navigateByUrl('/main-setting');
          this.showToast('Ratelist added!')
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
      message: 'please wait..',
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
