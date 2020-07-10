import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ToastController, LoadingController, IonSlides, IonSlide } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { DatabaseService, skfab } from 'src/app/services/database.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-coatfab',
  templateUrl: './coatfab.page.html',
  styleUrls: ['./coatfab.page.scss'],
})
export class CoatfabPage implements OnInit {
  coatsummerfab: AngularFirestoreCollection;
  coatsummer: Observable<any[]>;
  coatwinterfab: AngularFirestoreCollection;
  coatwinter: Observable<any[]>;
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
      this.coatsummerfab = db.collection('coatsummerfabData')
      this.coatsummer = this.coatsummerfab.valueChanges();
  
      this.coatwinterfab = db.collection('coatwinterfabData')
      this.coatwinter = this.coatwinterfab.valueChanges();
  
      this.coatsummer.subscribe(() => this.searching = false);
      this.coatwinter.subscribe(() => this.searching = false);
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
      this.storage.ref(`coatsummer/${summ.id}`).delete();
    }
    this.coatsummerfab.doc(summ.id).delete()
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
      this.storage.ref(`coatwinter/${win.id}`).delete();
    }
    this.coatwinterfab.doc(win.id).delete()
    this.loadingCtrl.dismiss();
    this.showToast('Winter fabric deleted')
  }

  updateSummer(id, fabname, price, meter, discount, stock) {
    //  console.log(
    //     id, fabname );
    this.router.navigate(['editcoatfabric', {
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
    this.router.navigate(['editcoatfabric', {
      id: id,
      fabname: fabname,
      price: price,
      meter: meter,
      discount: discount,
      stock: stock
    }])

  }

  selectSFab(summ) {
    this.cartService.Coatfab(summ);
    this.router.navigateByUrl('coat')
    this.showToast('Summer fab choosed')

  }
  selectWFab(win) {
    this.cartService.Wcoatfab(win);
    this.router.navigateByUrl('coat');
    this.showToast('Winter fab choosed')
  }
  

}
