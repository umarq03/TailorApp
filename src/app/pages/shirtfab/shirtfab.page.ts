import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ToastController, LoadingController, IonSlides, IonSlide } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { DatabaseService, skfab } from 'src/app/services/database.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-shirtfab',
  templateUrl: './shirtfab.page.html',
  styleUrls: ['./shirtfab.page.scss'],
})
export class ShirtfabPage implements OnInit {
  shirtsummerfab: AngularFirestoreCollection;
  shirtsummer: Observable<any[]>;
  shirtwinterfab: AngularFirestoreCollection;
  shirtwinter: Observable<any[]>;
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

  constructor( private router: Router,
    private menu: MenuController,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private database: DatabaseService,
    private db: AngularFirestore,
    private storage: AngularFireStorage) {
      this.shirtsummerfab = db.collection('shirtsummerfabData')
      this.shirtsummer = this.shirtsummerfab.valueChanges();
  
      this.shirtwinterfab = db.collection('shirtwinterfabData')
      this.shirtwinter = this.shirtwinterfab.valueChanges();
  
      this.shirtsummer.subscribe(() => this.searching = false);
      this.shirtwinter.subscribe(() => this.searching = false);
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
      this.storage.ref(`shirtsummer/${summ.id}`).delete();
    }
    this.shirtsummerfab.doc(summ.id).delete()
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
      this.storage.ref(`shirtwinter/${win.id}`).delete();
    }
    this.shirtwinterfab.doc(win.id).delete()
    this.loadingCtrl.dismiss();
    this.showToast('Winter fabric deleted')
  }

  updateSummer(id, fabname, price, meter, discount, stock) {
    //  console.log(
    //     id, fabname );
    this.router.navigate(['editshirtfabric', {
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
    this.router.navigate(['editshirtfabric', {
      id: id,
      fabname: fabname,
      price: price,
      meter: meter,
      discount: discount,
      stock: stock
    }])

  }

  selectSFab(summ) {
    this.cartService.shirtfabb(summ);
    this.router.navigateByUrl('shirt')
    this.showToast('Summer fab choosed')

  }
  selectWFab(win) {
    this.cartService.wshirtfab(win);
    this.router.navigateByUrl('shirt');
    this.showToast('Winter fab choosed')
  }


}
