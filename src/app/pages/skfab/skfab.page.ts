import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController , LoadingController} from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService, skfab } from 'src/app/services/database.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-skfab',
  templateUrl: './skfab.page.html',
  styleUrls: ['./skfab.page.scss'],
})
export class SkfabPage implements OnInit {
  sksummerfab: AngularFirestoreCollection;
  sksummer: Observable<any[]>;
  skwinterfab: AngularFirestoreCollection;
  skwinter: Observable<any[]>;
  searching: boolean = true;
  type: string;

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.5
  }
  constructor
    (
    private router: Router,
    private menu: MenuController,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private database: DatabaseService,
    private db: AngularFirestore,
    private storage: AngularFireStorage
    ) 
  
  {
    this.menu.swipeGesture(false);

    this.sksummerfab = db.collection('sksummerfabData')
    this.sksummer = this.sksummerfab.valueChanges();

    this.skwinterfab = db.collection('skwinterfabData')
    this.skwinter = this.skwinterfab.valueChanges();

    this.sksummer.subscribe(()=> this.searching = false);
    this.skwinter.subscribe(()=> this.searching = false);
  }



  ngOnInit() {
     this.type = 'summer';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  async deleteSummer(summ){
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Deleting...',
      duration: 1000
      
    });
    await loading.present();

    if(summ.imageSummer){
      this.storage.ref(`sksummer/${summ.id}`).delete();
    }
    this.sksummerfab.doc(summ.id).delete()
    this.loadingCtrl.dismiss();
    this.showToast('Summer fabric deleted')
  }

  async deleteWinter(win){
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Deleting...',
      duration: 1000
      
    });
    await loading.present();

    if(win.imageSummer){
      this.storage.ref(`skwinter/${win.id}`).delete();
    }
    this.skwinterfab.doc(win.id).delete()
    this.loadingCtrl.dismiss();
    this.showToast('Summer fabric deleted')
  }

  updateSummer(id, fabname, price, meter, discount, stock){
  //  console.log(
  //     id, fabname );
  this.router.navigate(['editfabric', {
    id: id,
    fabname: fabname,
    price: price,
    meter: meter,
    discount: discount,
    stock: stock
  }])
  
  }
  updateWinter(id, Wfabname, Wprice, Wmeter, Wdiscount, Wstock){
    //  console.log(
    //     id, fabname );
    this.router.navigate(['editfabric', {
      id: id,
      Wfabname: Wfabname,
      Wprice: Wprice,
      Wmeter: Wmeter,
      Wdiscount: Wdiscount,
      Wstock: Wstock
    }])
    
    }


}
