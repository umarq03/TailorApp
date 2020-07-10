import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ToastController, LoadingController, IonSlides, IonSlide } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { DatabaseService, skfab } from 'src/app/services/database.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-waistcoatfab',
  templateUrl: './waistcoatfab.page.html',
  styleUrls: ['./waistcoatfab.page.scss'],
})
export class WaistcoatfabPage implements OnInit {
  wcoatsummerfab: AngularFirestoreCollection;
  wcoatsummer: Observable<any[]>;
  wcoatwinterfab: AngularFirestoreCollection;
  wcoatwinter: Observable<any[]>;
  searching: boolean = true;
  type: string;
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  sliderConfig = {
    zoom: {maxRatio:3},
    slidesPerView: 1.4,
    centeredSlides: true,
    spaceBetween: 8,
    loop: true
  }
  constructor(private router: Router,
    private menu: MenuController,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private database: DatabaseService,
    private db: AngularFirestore,
    private storage: AngularFireStorage) {
      this.wcoatsummerfab = db.collection('wcoatsummerfabData')
      this.wcoatsummer = this.wcoatsummerfab.valueChanges();
  
      this.wcoatwinterfab = db.collection('wcoatwinterfabData')
      this.wcoatwinter = this.wcoatwinterfab.valueChanges();
  
      this.wcoatsummer.subscribe(() => this.searching = false);
      this.wcoatwinter.subscribe(() => this.searching = false);
     }

  ngOnInit() {
    this.type = 'summer';

  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is ', currentIndex)
  }
  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2500
    }).then(toast => toast.present());
  }

  async deleteSummer(summ) {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Deleting...',
      duration: 1000

    });
    await loading.present();

    if (summ.imageSummer) {
      this.storage.ref(`wcoatsummer/${summ.id}`).delete();
    }
    this.wcoatsummerfab.doc(summ.id).delete()
    this.loadingCtrl.dismiss();
    this.showToast('Summer fabric deleted')
  }

  async deleteWinter(win) {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Deleting...',
      duration: 1000

    });
    await loading.present();

    if (win.imageSummer) {
      this.storage.ref(`wcoatwinter/${win.id}`).delete();
    }
    this.wcoatwinterfab.doc(win.id).delete()
    this.loadingCtrl.dismiss();
    this.showToast('Winter fabric deleted')
  }

  updateSummer(id, fabname, price, meter, discount, stock) {
    //  console.log(
    //     id, fabname );
    this.router.navigate(['editwcoatfabric', {
      id: id,
      fabname: fabname,
      price: price,
      meter: meter,
      discount: discount,
      stock: stock
    }])

  }
  updateWinter(id, fabname, price, meter, discount, stock) {
    //  console.log(
    //     id, fabname );
    this.router.navigate(['editwcoatfabric', {
      id: id,
      fabname: fabname,
      price: price,
      meter: meter,
      discount: discount,
      stock: stock
    }])

  }

  selectSFab(summ) {
    this.cartService.wcoatfabb(summ);
    this.router.navigateByUrl('waistcoat')
    this.showToast('Summer fab choosed')

  }
  selectWFab(win) {
    this.cartService.wwcoatfab(win);
    this.router.navigateByUrl('waistcoat');
    this.showToast('Winter fab choosed')
  }
}
