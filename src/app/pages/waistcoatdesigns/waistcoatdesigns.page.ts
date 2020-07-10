import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ToastController, LoadingController, IonSlides, IonSlide } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { DatabaseService, skfab } from 'src/app/services/database.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-waistcoatdesigns',
  templateUrl: './waistcoatdesigns.page.html',
  styleUrls: ['./waistcoatdesigns.page.scss'],
})
export class WaistcoatdesignsPage implements OnInit {
  wcoatdesigns: AngularFirestoreCollection;
  wcoatdesign: Observable<any[]>;
  searching: boolean = true;
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
      this.wcoatdesigns = db.collection('wcoatdesignData')
      this.wcoatdesign = this.wcoatdesigns.valueChanges();
    }
    

  ngOnInit() {

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

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2500
    }).then(toast => toast.present());
  }

  async delete(design) {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Deleting...',
      duration: 1000

    });
    await loading.present();

    if (design.image) {
      this.storage.ref(`wcoatdesign/${design.id}`).delete();
    }
    this.wcoatdesigns.doc(design.id).delete()
    this.loadingCtrl.dismiss();
    this.showToast('Design deleted')
  }

  selectDesign(product) {
    this.cartService.addwaistcoatdesigns(product);
    this.router.navigateByUrl('waistcoat')
    this.showToast('Design choosed')

  }

}
