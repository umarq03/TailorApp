import { Component, OnInit } from '@angular/core';
import { CartService , Info} from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { AngularFireDatabase , AngularFireList} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

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
    private loadingCtrl: LoadingController) { 

      this.emp = db.list('/Faborder');
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
     }
      const loading = await this.presentLoading();

      this.emp.push({
        yourname: yourname,
        phonenumber: phonenumber,
        address: address,
        fab: item
      });
      this.router.navigateByUrl('/fabrics');
      this.showToast('Order Placed, Thank you!')
      this.loadingCtrl.dismiss();  

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
      message: 'Sending..Please Wait'
    });
    return await loading.present();
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2500
    }).then(toast => toast.present());
  }

}
