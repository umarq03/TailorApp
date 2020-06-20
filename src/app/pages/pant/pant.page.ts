import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DatabaseService, Pant } from 'src/app/services/database.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
@Component({
  selector: 'app-pant',
  templateUrl: './pant.page.html',
  styleUrls: ['./pant.page.scss'],
})
export class PantPage implements OnInit{
  pant = [];
  pantdesigns = [];
  disablebtn;
  idea: Pant = {
    fabric: '',
    design:'',
    fullname: '',
    phonenumber: '',
    address: '',
    lambai: '',
    hip: '',
    thigh: '',
    waist: '',
    bottom: '',
    inside: '',
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
    private sms: SMS,
    private network: Network,
    public dialog: Dialogs) {
      this.network.onDisconnect().subscribe(()=>{
        this.showToast('Network was disconnected!')
      });
      
      this.network.onConnect().subscribe(()=>{
  
        setTimeout(() => {
          this.showToast('You got a '+''+this.network.type+'connection, woooho!');
        });
      });
  }

  async ngOnInit() {
    this.pant = this.cartService.getpant();
    this.pantdesigns = this.cartService.getpantdesigns();
  }
  ionviewDidEnter() {
    this.disablebtn = false;
  }
  getpantfab() {
    this.router.navigateByUrl('/pantfab');
  }
  getpantdesigns() {
    this.router.navigateByUrl('/pantdesigns');
  }
  getTotal() {
    return this.pant.reduce((i, j) => i + +j.price + +j.stitching, 0)
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.database.getPant(id).subscribe(idea => {
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
      this.showToast("Name is required!")
    }
    else if (this.idea.phonenumber == "") {
      this.showToast("PhoneNumber is required!")
    }
    else if (this.idea.address == "") {
      this.showToast("Address is required!")
    }
    else if (this.idea.lambai == "") {
      this.showToast("Lambai is required!")
    }
    else if (this.idea.hip == "") {
      this.showToast("Hip is required!")
    }
    else if (this.idea.thigh == "") {
      this.showToast("Thigh is required!")
    }
    else if (this.idea.waist == "") {
      this.showToast("Waist is required!")
    }
    else if (this.idea.bottom == "") {
      this.showToast("Bottom is required!")
    }
    else if (this.idea.inside == "") {
      this.showToast("Inside is required!")
    }else{
      this.disablebtn = true;
      this.database.addPant(this.idea).then(() => {
        this.loaddata();
        this.sendSMS();
        this.router.navigateByUrl('/categories');
        this.presentAlert();
      }, err => {
        this.showToast('There was a problem adding your SKdata :(');
      });
    }
 
  }
  async loaddata(){
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Sending Data...',
      duration: 1500
    });
    await loading.present();
   
  }

  async deleteIdea() {

    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Deleting Data...'
    });
    await loading.present();

    this.database.deletePant(this.idea.id).then(() => {
      this.router.navigateByUrl('/admin-database');
      loading.dismiss();
      this.showToast('Pantdata deleted');
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

    this.database.updatePant(this.idea).then(() => {
      this.router.navigateByUrl('/admin-database');
      loading.dismiss();
      this.showToast('Pantdata updated');
    }, err => {
      this.showToast('There was a problem updating your Skdata :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
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
    // this.sms.send('03018761467', this.idea.fullname+' '+'pant data had been added at TailorMate.'+' '+'customer phonenumber is :'+' '+this.idea.phonenumber+' '+'at'+this.idea.creaditAt,options).then(() => {
          this.sms.send('03018761467', this.idea.fullname+' '+'is send you pant data at TailorMate.'+' '+'customer phonenumber is :'+' '+this.idea.phonenumber+' '+'at'+this.idea.creaditAt,options).then(() => {

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
    // this.sms.send(String(this.idea.phonenumber),this.idea.fullname+' '+'recently your pant data has been successfully added, from TailorMate!',options).then(() => {
   this.sms.send(String(this.idea.phonenumber),this.idea.fullname+' '+'your pant data successfully sent, after 10 minutes we will call/sms you for confirmation , from TailorMate!',options).then(() => {

    })
    .catch(error => {
      this.showToast('ErrorFailed: ' + error);
    });
  }

}
