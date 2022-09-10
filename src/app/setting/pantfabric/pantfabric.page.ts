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
  selector: 'app-pantfabric',
  templateUrl: './pantfabric.page.html',
  styleUrls: ['./pantfabric.page.scss'],
})
export class PantfabricPage implements OnInit {
  selectedFileWinter: any;
  selectedFileSummer: any;
  pantsummerfab: AngularFirestoreCollection;
  pantsummer: Observable<any[]>;
  pantwinterfab: AngularFirestoreCollection;
  pantwinter: Observable<any[]>;
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
    this.pantsummerfab = db.collection('pantsummerfabData')
    this.pantsummer = this.pantsummerfab.valueChanges();

    this.pantwinterfab = db.collection('pantwinterfabData')
    this.pantwinter = this.pantwinterfab.valueChanges();
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

    this.pantsummerfab.add({
      fabname: this.summerfab.fabname, price: this.summerfab.price,
      discount: this.summerfab.discount, stock: this.summerfab.stock,
      meter: this.summerfab.meter, stitching: this.summerfab.stitching
    }).then(async resp => {
      const imageSummer = await this.uploadFileSummer(resp.id, this.selectedFileSummer)
      this.pantsummerfab.doc(resp.id).update({
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
        const task = await this.storage.ref('pantsummer').child(id).put(file[0]);
        return this.storage.ref(`pantsummer/${id}`).getDownloadURL().toPromise();
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

    this.pantwinterfab.add({
      fabname: this.winterfab.fabname, price: this.winterfab.price,
      discount: this.winterfab.discount, stock: this.winterfab.stock,
      meter: this.winterfab.meter, stitching: this.winterfab.stitching
    }).then(async resp => {
      const imageWinter = await this.uploadFileWinter(resp.id, this.selectedFileWinter)
      this.pantwinterfab.doc(resp.id).update({
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
        const task = await this.storage.ref('pantwinter').child(id).put(file[0]);
        return this.storage.ref(`pantwinter/${id}`).getDownloadURL().toPromise();
      } catch (err) {
        console.log(err);
      }
    }
  }

}
