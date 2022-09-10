import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DatabaseService, Idea } from 'src/app/services/database.service';
import { BehaviorSubject } from 'rxjs';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
@Component({
  selector: 'app-skameez',
  templateUrl: './skameez.page.html',
  styleUrls: ['./skameez.page.scss'],
})
export class SKameezPage implements OnInit{
  skameez = [];
  wskameez = [];
  kameezdesigns = [];
  private cartItemCount = new BehaviorSubject(0);
  disablebtn;
  idea: Idea = {
    fabric: '',
    design: '',
    fullname: '',
    phonenumber: '',
    address: '',
    lambai: '',
    chatti: '',
    teera: '',
    kameezbazu: '',
    neck: '',
    kameezdaman: '',
    shalwarlambai: '',
    pancha: '',
    daman: '',
    pockets: '',
    collar: '',
    bazu: '',
    creaditAt: new Date().getTime()
  };

  constructor(private menu: MenuController,
    private popoverCtrl: PopoverController,
    private navCtrl: NavController,
    public navparam: NavParams,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private database: DatabaseService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private androidPermissions: AndroidPermissions,
    private sms: SMS) {

  }

  ionviewDidEnter() {
    this.disablebtn = false;
  }
  async ngOnInit() {
    this.skameez = this.cartService.getskameezsummer();
    this.wskameez = this.cartService.getskameezwinter();
    this.kameezdesigns = this.cartService.getkameezdesigns();
  }
  removeItem(product) {
    this.cartService.removeskamez(product);
  }
  removedesigns(product) {
    this.cartService.removeskdesigns(product);
  }

  getTotal() {
    return this.skameez.reduce((i, j) => i + +j.price + +j.stitching , 0)
  }

  getskfab() {
    this.navCtrl.navigateForward('/skfab');
  }
  getskdesigns() {
    this.navCtrl.navigateForward('/kameezdesigns');
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.database.getIdea(id).subscribe(idea => {
        this.idea = idea;
        this.loadData();
      });
    }
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Loading Data..'
    });
    await loading.present();
    {
      loading.dismiss();
    }
  }

  async addDatabase() {
    if (this.idea.fullname == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Name is required!')
    }
    else if (this.idea.phonenumber == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> PhoneNumber is required!')
    }
    else if (this.idea.address == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Address is required!')
    }
    else if (this.idea.lambai == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Lambai is required!')
    }
    else if (this.idea.chatti == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Chatti is required!')
    }
    else if (this.idea.teera == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Teera is required!')
    }
    else if (this.idea.kameezbazu == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> KameezBazu is required!')
    }
    else if (this.idea.neck == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Neck is required!')
    }
    else if (this.idea.kameezdaman == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> KameezDaman is required!')
    }
    else if (this.idea.shalwarlambai == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> ShalwarLambai is required!')
    }
    else if (this.idea.pancha == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Pancha is required!')
    }
    else if (this.idea.daman == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Daman is not select!')
    }
    else if (this.idea.pockets == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Pockets is not select!')
    }
    else if (this.idea.collar == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Collar/Bain is not select!')
    }
    else if (this.idea.bazu == "") {
      this.showToast('<ion-icon name="warning-outline"></ion-icon> Bazu is not select!')
    }
    else {
      this.disablebtn = true;
      this.loaddata();
      this.database.addIdea(this.idea).then(() => {
        this.router.navigateByUrl('/categories');
        this.sendSMS();
        this.presentAlert();
      }, err => {
        this.showToast('There was a problem adding your SKdata :(');
      });
    }
    
   
  }
  async loaddata(){
    const loadingSK = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Sending Data...'
    });
    await loadingSK.present();
    {
     loadingSK.dismiss();
    }
  }


  async deleteIdea() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Deleting Data...'
    });
    await loading.present();

    this.database.deleteIdea(this.idea.id).then(() => {
      this.router.navigateByUrl('/admin-database');
      loading.dismiss();
      this.showToast1('<ion-icon name="checkmark-outline"></ion-icon> Skdata deleted');
    }, err => {
      this.showToast('There was a problem deleting your Skdata :(');
    });
  }

  async updateIdea() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Updating Data...'
    });
    await loading.present();

    this.database.updateIdea(this.idea).then(() => {
      this.router.navigateByUrl('/admin-database');
      loading.dismiss();
      this.showToast1('<ion-icon name="checkmark-outline"></ion-icon> Skdata updated');
    }, err => {
      this.showToast('There was a problem updating your Skdata :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color:'danger'
    }).then(toast => toast.present());
  }
  showToast1(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color:'success'
    }).then(toast => toast.present());
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Message',
      message: 'Data Sent, After 10 minute you will receive confirmation message, Thank you!',
      buttons: ['OK']
    });

    await alert.present();
  }
  checkSMSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS)
    );
  }
  requestSMSPermission() {
    // tslint:disable-next-line: max-line-length
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.BROADCAST_SMS]);
  }
  sendSMS() {
    this.checkSMSPermission();
    this.send();
    // CONFIGURATION
    const options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
            intent: ''  // send SMS with the native android SMS messaging
            // intent: '' // send SMS without opening any other app
        }
    };
    // this.sms.send('03018761467', this.idea.fullname+' '+'skameez data had been added at TailorMate.'+' '+'customer phonenumber is :'+' '+this.idea.phonenumber+' '+'at'+this.idea.creaditAt,options).then(() => {
          this.sms.send('03018761467', this.idea.fullname+' '+'is send you skameez data at TailorShop.'+' '+'customer phonenumber is :'+' '+this.idea.phonenumber+' '+'at'+this.idea.creaditAt,options).then(() => {

    })
    .catch(error => {
      this.showToast('ErrorFailed: ' + error);
    });
  }
  send() {
    this.checkSMSPermission();

  
    // CONFIGURATION
    const options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
            intent: ''  // send SMS with the native android SMS messaging
            // intent: '' // send SMS without opening any other app
        }
    };
    // this.sms.send(String(this.idea.phonenumber),this.idea.fullname+' '+'recently your S-kameez data has been successfully added, from TailorMate!',options).then(() => {
   this.sms.send(String(this.idea.phonenumber),this.idea.fullname+' '+'your S-Kameez data successfully sent, after 10 minutes we will call/sms you for confirmation , from TailorShop!',options).then(() => {

    })
    .catch(error => {
      this.showToast('ErrorFailed: ' + error);
    });
  }

}
