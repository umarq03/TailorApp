import { Component, OnInit } from '@angular/core';
import { SkdatabasePage } from '../skdatabase/skdatabase.page';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatabaseService, Coat} from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-coatdatabase',
  templateUrl: './coatdatabase.page.html',
  styleUrls: ['./coatdatabase.page.scss'],
})
export class CoatdatabasePage implements OnInit {
  skdatabase = SkdatabasePage;
  private coatdata: Observable<Coat[]>;
  offset = 0;
  searching: boolean = true;
  constructor(private database: DatabaseService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getDatabase();
    this.coatdata.subscribe(()=> this.searching = false);

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

    this.coatdata = this.coatdata.pipe(
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
    this.coatdata = this.database.getCoats();     
  }
}
