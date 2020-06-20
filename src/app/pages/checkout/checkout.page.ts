import { Component, OnInit } from '@angular/core';
import { CartService} from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController, LoadingController, AlertController } from '@ionic/angular';
import { AngularFireDatabase , AngularFireList} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Network } from '@ionic-native/network/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  items = [];

  yourname:string = ''
  phonenumber:string = ''
  address: string = ''
  item = ''

  disablebtn;

  private emp : AngularFireList<any>;


  constructor(private cartService: CartService, private router: Router, 
    private actRoute: ActivatedRoute, private toastCtrl: ToastController, 
    public db: AngularFireDatabase, public navCtrl: NavController, private firestorage: AngularFireStorage,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController,
    private network: Network, private androidPermissions: AndroidPermissions, private sms: SMS) { 

      this.emp = db.list('/Faborder');
      this.network.onDisconnect().subscribe(()=>{
        this.showToast('Network was disconnected!')
      });
      
      this.network.onConnect().subscribe(()=>{
  
        setTimeout(() => {
          this.showToast('You got a '+''+this.network.type+'connection, woooho!');
        });
      });
    }

    ionViewDidLoad(){
      console.log('ionViewDidLoad CheckoutPage');
    }
    ionViewDidEnter(){
      this.disablebtn = false;
    }

   async placeOrder(yourname, phonenumber, address, item){
     if(this.yourname == ''){
       this.showToast('Name is required!')
     }else if (this.phonenumber == ''){
       this.showToast('PhoneNumber is required!')
     }else if(this.address == ''){
       this.showToast('Address is required!')
     }else{
       this.disablebtn = true;
       this.sendSMS();
       this.presentLoading();
       this.emp.push({
         yourname: yourname,
         phonenumber: phonenumber,
         address: address,
         fab: item
       });
       this.router.navigateByUrl('/fabrics');
       this.presentAlert();
     }

    }

    removeItem(product){
      this.cartService.removeItem(product);
    }

  ngOnInit() {
    this.items = this.cartService.getCart();

  }
  getTotal(){

    return this.items.reduce((i , j) => i + j.price * j.amount, 0)
  }

  async presentLoading() {
    console.log('starting loading');
     const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Sending..Please Wait',
      duration: 1500
    });
    return await loading.present();
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2500
    }).then(toast => toast.present());
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Message',
      message: 'Order Placed, Thank You.',
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
    // this.sms.send('03018761467', this.yourname+' '+'fabric orider had been added at TailorMate.'+' '+'customer phonenumber is :'+' '+this.phonenumber+' ',options).then(() => {
          this.sms.send('03018761467', this.yourname+' '+'is send you fabric order at TailorMate.'+' '+'customer phonenumber is :'+' '+this.phonenumber+' ',options).then(() => {

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
    // this.sms.send(String(this.phonenumber),this.yourname+' '+'recently your fabric order has been successfully added, from TailorMate!',options).then(() => {
   this.sms.send(String(this.phonenumber),this.yourname+' '+'your fabric order successfully sent, after 10 minutes we will call/sms you for confirmation , from TailorMate!',options).then(() => {

    })
    .catch(error => {
      this.showToast('ErrorFailed: ' + error);
    });
  }


}
