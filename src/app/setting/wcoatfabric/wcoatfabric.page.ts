import { Component, OnInit } from '@angular/core';
import {
  ToastController, LoadingController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Chooser } from '@ionic-native/chooser/ngx';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-wcoatfabric',
  templateUrl: './wcoatfabric.page.html',
  styleUrls: ['./wcoatfabric.page.scss'],
})
export class WcoatfabricPage implements OnInit {
  selectedFileWinter: any;
  selectedFileSummer: any;
  wcoatsummerfab: AngularFirestoreCollection;
  wcoatsummer: Observable<any[]>;
  wcoatwinterfab: AngularFirestoreCollection;
  wcoatwinter: Observable<any[]>;
  summerfab = {
    fabname: '',
    price: '',
    discount: '',
    stock: '',
    meter: '',
    stitching:''
  }
  winterfab = {
    fabname: '',
    price: '',
    discount: '',
    stock: '',
    meter: '',
    stitching:''
  }
  constructor(public navparam: NavParams,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private chooser: Chooser,
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private cartitem: CartService) {
      this.wcoatsummerfab = db.collection('wcoatsummerfabData')
      this.wcoatsummer = this.wcoatsummerfab.valueChanges();
  
      this.wcoatwinterfab = db.collection('wcoatwinterfabData')
      this.wcoatwinter = this.wcoatwinterfab.valueChanges();
     }

  ngOnInit() {
  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  chooseFabricSummer(event) {
    this.selectedFileSummer = event.target.files;
  }

  async addsumm() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Adding fabric...'
    });
    await loading.present();

    this.wcoatsummerfab.add({
      fabname: this.summerfab.fabname, price: this.summerfab.price,
      discount: this.summerfab.discount, stock: this.summerfab.stock,
      meter: this.summerfab.meter, stitching: this.summerfab.stitching
    }).then(async resp => {
      const imageSummer = await this.uploadFileSummer(resp.id, this.selectedFileSummer)
      this.wcoatsummerfab.doc(resp.id).update({
        id: resp.id,
        imageSummer: imageSummer || null
      })
      loading.dismiss();
      this.showToast('Summer Fabric Added');
      this.router.navigateByUrl('addfab');
    })
  }
  async uploadFileSummer(id, file): Promise<any> {
    if (file && file.length) {
      try {
        const task = await this.storage.ref('wcoatsummer').child(id).put(file[0]);
        return this.storage.ref(`wcoatsummer/${id}`).getDownloadURL().toPromise();
      } catch (err) {
        console.log(err);
      }
    }
  }

  chooseFabricWinter(event) {
    this.selectedFileWinter = event.target.files;
  }

  async addwint() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Adding fabric...'
    });
    await loading.present();

    this.wcoatwinterfab.add({
      fabname: this.winterfab.fabname, price: this.winterfab.price,
      discount: this.winterfab.discount, stock: this.winterfab.stock,
      meter: this.winterfab.meter, stitching: this.winterfab.stitching
    }).then(async resp => {
      const imageWinter = await this.uploadFileWinter(resp.id, this.selectedFileWinter)
      this.wcoatwinterfab.doc(resp.id).update({
        id: resp.id,
        imageWinter: imageWinter || null
      })
      loading.dismiss();
      this.showToast('Winter Fabric Added');
      this.router.navigateByUrl('addfab');
    })
  }

  async uploadFileWinter(id, file): Promise<any> {
    if (file && file.length) {
      try {
        const task = await this.storage.ref('wcoatwinter').child(id).put(file[0]);
        return this.storage.ref(`wcoatwinter/${id}`).getDownloadURL().toPromise();
      } catch (err) {
        console.log(err);
      }
    }
  }

}
