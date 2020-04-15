import { Component, OnInit ,Input} from '@angular/core';
// import { CustomerService, Idea } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController , LoadingController} from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { AngularFireDatabase , AngularFireList} from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {
//   private ideas: Observable<Idea[]>;
  // @Input() customer: Customer

//   idea: Idea = {
//     name: '',
//     notes: '',
//     level:'',
//     item: '',
//     creaditAt: new Date().getTime()
//   };
  
// ideaId = null
//   item = ''

//   skameez = [];
//   kameezdesigns = [];

//   private emp : AngularFireList<any>

  constructor(
    private activatedRoute: ActivatedRoute,
     private toastCtrl: ToastController, private router: Router, private cartService: CartService, 
     private db: AngularFireDatabase, private loadingCtrl: LoadingController) 
     { 

    //   this.emp = db.list('/fab');
     }

  ngOnInit() {
    // this.skameez = this.cartService.getskameez();
    // this.kameezdesigns = this.cartService.getkameezdesigns();
    // this.ideas = this.customerService.getIdeas();

  }

//   ionViewWillEnter() {
//     let id = this.activatedRoute.snapshot.paramMap.get('id');
//     if (id) {
//       this.customerService.getIdea(id).subscribe(idea => {
//         this.idea = idea;
//         this.loadTodo();
//       });
//     } 
//   }

//   async loadTodo() {
//     // let id = this.activatedRoute.snapshot.paramMap.get('id');
//     const loading = await this.loadingCtrl.create({
//       message: 'Loading Data..'
//     });
//     await loading.present();
//     {
//      loading.dismiss();
//     }
  
//   }
 
//   async addIdea() {

//     const loading = await this.loadingCtrl.create({
//       message: 'Saving Data...'
//     });
//     await loading.present();
// {
//     this.customerService.addIdea(this.idea).then(() => {
//       this.router.navigateByUrl('/list');
//       this.showToast('Data added');
//       loading.dismiss();
//     }, err => {
//       this.showToast('There was a problem adding your idea :(');
//     });
  
//   }
//   }
 
//   async deleteIdea() {

//     const loading = await this.loadingCtrl.create({
//       message: 'Deleting Data...'
//     });
//     await loading.present();
    
//     this.customerService.deleteIdea(this.idea.id).then(() => {
//       this.router.navigateByUrl('/list');
//       loading.dismiss();
//       this.showToast('Data deleted');
      
//     }, err => {
//       this.showToast('There was a problem deleting your idea :(');
//     });
//   }

//   async updateIdea() {
//     const loading = await this.loadingCtrl.create({
//       message: 'Updating Data...'
//     });
//     await loading.present();

//     this.customerService.updateIdea(this.idea).then(() => {
//       this.showToast('Data updated');
      
//     }, err => {
//       this.showToast('There was a problem updating your idea :(');
//     });
//   }
 
//   showToast(msg) {
//     this.toastCtrl.create({
//       message: msg,
//       duration: 2000
//     }).then(toast => toast.present());
//   }


//   selectFab(){

//     this.router.navigateByUrl('/skfab');
//   }

//  click(item){

//   this.emp.push({
//     item:item
//   });
//  }

}
