import { Component, OnInit } from '@angular/core';
// import { CustomerService, Idea } from '../customer.service';
import { map, tap } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {

//   private ideas: Observable<Idea[]>;
//   public searchTerm: string = "";
//   offset = 0;
  
//   searching = false;
  constructor( private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    // this.getIdeasdata();
  }

//   ionViewWillEnter() {
//     this.searching = true;
//     this.getIdeasdata();
//   }

//   getIdeasdata() {
//     this.searching = true;
//     this.ideas = this.customerService.getIdeas();
//     this.searching = false;
     
//   }

//   filterUsers(searchTerm) {
//     this.searching = true;
//     this.getIdeasdata();
//     return this.ideas.pipe(
//       map(res => {
//         const result = res.filter(idea => {
//           return idea.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1; });
//         this.searching = false;
//         console.log(result);
//         return result;
//           })
//           );
//         }

//   searchList() {
//     this.ideas = this.filterUsers(this.searchTerm);
//     console.log(this.searchTerm);
//   }


}
