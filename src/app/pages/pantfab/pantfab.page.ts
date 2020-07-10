import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ToastController, LoadingController, IonSlides, IonSlide } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { DatabaseService, skfab } from 'src/app/services/database.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-pantfab',
  templateUrl: './pantfab.page.html',
  styleUrls: ['./pantfab.page.scss'],
})
export class PantfabPage implements OnInit {
  pantsummerfab: AngularFirestoreCollection;
  pantsummer: Observable<any[]>;
  pantwinterfab: AngularFirestoreCollection;
  pantwinter: Observable<any[]>;
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

      this.pantsummerfab = db.collection('pantsummerfabData')
      this.pantsummer = this.pantsummerfab.valueChanges();
  
      this.pantwinterfab = db.collection('pantwinterfabData')
      this.pantwinter = this.pantwinterfab.valueChanges();
  
      this.pantsummer.subscribe(() => this.searching = false);
      this.pantwinter.subscribe(() => this.searching = false);
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
      this.storage.ref(`pantsummer/${summ.id}`).delete();
    }
    this.pantsummerfab.doc(summ.id).delete()
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
      this.storage.ref(`pantwinter/${win.id}`).delete();
    }
    this.pantwinterfab.doc(win.id).delete()
    this.loadingCtrl.dismiss();
    this.showToast('Winter fabric deleted')
  }

  updateSummer(id, fabname, price, meter, discount, stock) {
    //  console.log(
    //     id, fabname );
    this.router.navigate(['editpantfabric', {
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
    this.router.navigate(['editpantfabric', {
      id: id,
      fabname: fabname,
      price: price,
      meter: meter,
      discount: discount,
      stock: stock
    }])

  }

  selectSFab(summ) {
    this.cartService.pantfabb(summ);
    this.router.navigateByUrl('pant')
    this.showToast('Summer fab choosed')

  }
  selectWFab(win) {
    this.cartService.wpantfab(win);
    this.router.navigateByUrl('pant');
    this.showToast('Winter fab choosed')
  }
  

}
