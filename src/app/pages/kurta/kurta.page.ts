import { Component, OnInit , OnDestroy} from '@angular/core';
import {
  ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DatabaseService, Kurta } from 'src/app/services/database.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
@Component({
  selector: 'app-kurta',
  templateUrl: './kurta.page.html',
  styleUrls: ['./kurta.page.scss'],
})
export class KurtaPage implements OnInit {
  kurta = [];
  kurtadesigns = [];
  disablebtn;
  idea: Kurta = {
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
    shalwar: '',
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
    private androidPermissions: AndroidPermissions ,
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
    this.kurta = this.cartService.getkurta();
    this.kurtadesigns = this.cartService.getkurtadesigns();
  }
  ionViewDidEnter(){
    this.disablebtn = false;
  }
  getTotal() {
    return this.kurta.reduce((i, j) => i + +j.price + +j.stitching, 0)
  }
  getkurtafab(){

    this.router.navigateByUrl('/kurtafab');
  }
  getkurtadesigns(){

    this.router.navigateByUrl('/kurtadesigns');
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.database.getKurta(id).subscribe(idea => {
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
    else if (this.idea.chatti == "") {
      this.showToast("Chatti is required!")
    }
    else if (this.idea.teera == "") {
      this.showToast("Teera is required!")
    }
    else if (this.idea.kameezbazu == "") {
      this.showToast("KameezBazu is required!")
    }
    else if (this.idea.neck == "") {
      this.showToast("Neck is required!")
    }
    else if (this.idea.kameezdaman == "") {
      this.showToast("KameezDaman is required!")
    }
    else if (this.idea.shalwarlambai == "") {
      this.showToast("ShalwarLambai is required!")
    }
    else if (this.idea.pancha == "") {
      this.showToast("Pancha is required!")
    }
    else if (this.idea.shalwar == "") {
      this.showToast("Shalwar is not select!")
    }
    else if (this.idea.daman == "") {
      this.showToast("Daman is not select!")
    }
    else if (this.idea.pockets == "") {
      this.showToast("Pockets is not select!")
    }
    else if (this.idea.collar == "") {
      this.showToast("Collar/Bain is not select!")
    }
    else if (this.idea.bazu == "") {
      this.showToast("Bazu is not select!")
    }else{
      this.disablebtn = true;
      this.database.addKurta(this.idea).then(() => {
        this.loaddata();
        this.sendSMS();
        this.router.navigateByUrl('/categories');
        this.presentAlert();
      }, err => {
        this.showToast('There was a problem adding your Kurtadata :(');
      });
    
    }
   
  }
  async loaddata(){
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Sending Data...'
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

    this.database.deleteKurta(this.idea.id).then(() => {
      this.router.navigateByUrl('/admin-database')
      loading.dismiss();
      this.showToast('Kurtadata deleted');
    }, err => {
      this.showToast('There was a problem deleting your Kurtadata :(');
    });
  }

  async updateIdea() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Updating Data...'
    });
    await loading.present();

    this.database.updateKurta(this.idea).then(() => {
      this.router.navigateByUrl('/admin-database')
      loading.dismiss();
      this.showToast('Kurtadata updated');
    }, err => {
      this.showToast('There was a problem updating your Kurtadata :(');
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
    // this.sms.send('03018761467', this.idea.fullname+' '+'kurta data had been added at TailorMate.'+' '+'customer phonenumber is :'+' '+this.idea.phonenumber+' '+'at'+this.idea.creaditAt,options).then(() => {
          this.sms.send('03018761467', this.idea.fullname+' '+'is send you kurta data at TailorMate.'+' '+'customer phonenumber is :'+' '+this.idea.phonenumber+' '+'at'+this.idea.creaditAt,options).then(() => {

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
    // this.sms.send(String(this.idea.phonenumber),this.idea.fullname+' '+'recently your kurta data has been successfully added, from TailorMate!',options).then(() => {
   this.sms.send(String(this.idea.phonenumber),this.idea.fullname+' '+'your kurta data successfully sent, after 10 minutes we will call/sms you for confirmation , from TailorMate!',options).then(() => {

    })
    .catch(error => {
      this.showToast('ErrorFailed: ' + error);
    });
  }
}
