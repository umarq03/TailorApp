import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { DatabaseService, Idea } from 'src/app/services/database.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skdatabase',
  templateUrl: './skdatabase.page.html',
  styleUrls: ['./skdatabase.page.scss'],
})
export class SkdatabasePage implements OnInit {
  private skdata: Observable<Idea[]>;
  offset = 0;
  searching = false;
  public name: string;
  public sk : string;
  private about = [];
  private fullname: string;
  
  constructor(private database: DatabaseService, private loadingCtrl: LoadingController, 
    private router: Router, private navCtrl: NavController  ) {
   }

  ngOnInit() {
    this.getDatabase();
  }
  searchTerm = '';
  searchText = '';
  
  filterMe() {
    console.log('searchterm', this.searchTerm);
    this.searchText = '';
    if (this.searchTerm != null) {
      this.searchText = this.searchTerm.toLowerCase();
    } else {
      this.searchText = '';
    }

    this.skdata = this.skdata.pipe(
        map((reports: any[]) => reports.filter(p => {
          if (p.fullname.toString().toLowerCase().indexOf(this.searchText) > -1) {return p; }
        }))
    );
      }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getDatabase() {
    this.searching = true;
    this.skdata = this.database.getIdeas();
    this.searching = false;

  }
  getCart() {

    return this.about;
  }

  // go(uid){

  //   // this.router.navigate(['about', {name: this.name}]);;
  //   // this.addProduct(sk);
  //   // let navigateItem =  this.skdata[sk];
  //   // this.router.navigate(['about', {'navigateItem': navigateItem}])
  //   this.database.getIdea = uid;
  //   this.router.navigate(['about'])
  // }
  go(fullname) {

    this.router.navigate(['about', {fullname: this.fullname}])

  //   let added = false;
  //   for (let skdata of this.about) {

  //     if (skdata.name === sk.name) {
  //       skdata.amount += 1;
  //       added = true;
  //       break;
  //     }
  //   }
  //   if (!added) {
  //     this.about.push(sk);
  //   }
  //   this.about.push(sk);
  //   this.router.navigate(['about'])
  }
}
