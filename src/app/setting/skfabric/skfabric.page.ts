import { Component, OnInit } from '@angular/core';
import {
  ToastController, LoadingController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Chooser} from '@ionic-native/chooser/ngx';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-skfabric',
  templateUrl: './skfabric.page.html',
  styleUrls: ['./skfabric.page.scss'],
})
export class SkfabricPage implements OnInit {

  selectedFileWinter: any;
  selectedFileSummer: any;
  sksummerfab: AngularFirestoreCollection;
  sksummer: Observable<any[]>;
  skwinterfab: AngularFirestoreCollection;
  skwinter: Observable<any[]>;
  fabname: string = '';
  price: string = ''
  discount: string = ''
  stock: string = ''
  meter: string = ''

  Wfabname: string = '';
  Wprice: string = ''
  Wdiscount: string = ''
  Wstock: string = ''
  Wmeter: string = ''

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

      this.sksummerfab = db.collection('sksummerfabData')
      this.sksummer = this.sksummerfab.valueChanges();

      this.skwinterfab = db.collection('skwinterfabData')
      this.skwinter = this.skwinterfab.valueChanges();

     }

  ngOnInit() {
  }

  // ionViewWillEnter() {
  //   let id = this.activatedRoute.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.database.getskfab(id).subscribe(idea => {
  //       this.idea = idea;
  //       this.loadData2();
  //     });
  //   }
  // }

  // save() {
  //   this.loadData();
  //   this.database.addskfab(this.idea).then(() => {
  //     this.add();
  //     this.router.navigateByUrl('/addfab');
  //     this.loadingCtrl.dismiss();
  //     this.showToast('Skfab saved')
      
  //   }, err => {
  //     this.showToast('SomeWent wrong to save setting! :(');
  //   });

  // }

  // async updateIdea() {
  //   const loading = await this.loadingCtrl.create({
  //     spinner: 'circles',
  //     keyboardClose: true,
  //     message: 'Updating Data...'
  //   });
  //   await loading.present();

  //   this.database.updateskfab(this.idea).then(() => {
  //     this.router.navigateByUrl('/skfab');
  //     loading.dismiss();
  //     this.showToast('Skfab updated');
  //   }, err => {
  //     this.showToast('There was a problem updating your skfabdata :(');
  //   });
  // }

  // async deleteIdea() {
  //   const loading = await this.loadingCtrl.create({
  //     spinner: 'circles',
  //     keyboardClose: true,
  //     message: 'Deleting Data...'
  //   });
  //   await loading.present();

  //   this.database.deleteskfab(this.idea.id).then(() => {
  //     this.router.navigateByUrl('/skfab');
  //     loading.dismiss();
  //     this.showToast('Skfab deleted');
  //   }, err => {
  //     this.showToast('There was a problem deleting your skfabdata :(');
  //   });
  // }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  // async loadData() {
  //   const loading = await this.loadingCtrl.create({
  //     spinner: 'circles',
  //     keyboardClose: true,
  //     message: 'please wait..',
  //     duration: 1000
  //   });
  //   await loading.present();
  //   {
  //   }

  // }

  // async loadData2() {
  //   const loading = await this.loadingCtrl.create({
  //     spinner: 'circles',
  //     keyboardClose: true,
  //     message: 'Loading...',
  //     duration: 1000
  //   });
  //   await loading.present();
  //   {
     
  //   }
  // }
  chooseFabricSummer(event){
    this.selectedFileSummer = event.target.files;
  }
  
  async addsumm(){
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Adding fabric...'
    });
    await loading.present();

    this.sksummerfab.add({
      fabname: this.fabname, price: this.price, 
      discount: this.discount, stock: this.stock,
      meter: this.meter
    }).then(async resp =>{
      const imageSummer = await this.uploadFileSummer(resp.id, this.selectedFileSummer)
      this.sksummerfab.doc(resp.id).update({
        id: resp.id,
        imageSummer: imageSummer || null
      })
      loading.dismiss();
      this.showToast('Summer Fabric Added');
      this.router.navigateByUrl('addfab');
    })
  }
  async uploadFileSummer(id, file): Promise<any> {
    if(file && file.length){
      try{
      const task = await this.storage.ref('sksummer').child(id).put(file[0]);
      return this.storage.ref(`sksummer/${id}`).getDownloadURL().toPromise();
      }catch(err){
        console.log(err);
      }
    }
  }
  
  chooseFabricWinter(event){
    this.selectedFileWinter = event.target.files;
  }

  async addwint(){
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Adding fabric...'
    });
    await loading.present();

    this.skwinterfab.add({
      Wfabname: this.Wfabname, Wprice: this.Wprice, 
      Wdiscount: this.Wdiscount, Wstock: this.Wstock,
      Wmeter: this.Wmeter
    }).then(async resp =>{
      const imageWinter = await this.uploadFileWinter(resp.id, this.selectedFileWinter)
      this.skwinterfab.doc(resp.id).update({
        id: resp.id,
        imageWinter: imageWinter || null
      })
      loading.dismiss();
      this.showToast('Winter Fabric Added');
      this.router.navigateByUrl('addfab');
    })
  }

    
  async uploadFileWinter(id, file): Promise<any> {
    if(file && file.length){
      try{
      const task = await this.storage.ref('skwinter').child(id).put(file[0]);
      return this.storage.ref(`skwinter/${id}`).getDownloadURL().toPromise();
      }catch(err){
        console.log(err);
      }
    }
  }

}
