import { Component, OnInit } from '@angular/core';
import { SkdatabasePage } from '../skdatabase/skdatabase.page';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatabaseService, Pant } from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-pantdatabase',
  templateUrl: './pantdatabase.page.html',
  styleUrls: ['./pantdatabase.page.scss'],
})
export class PantdatabasePage implements OnInit {
  skdatabase = SkdatabasePage;
  private pantdata: Observable<Pant[]>;
  offset = 0;
  searching = false;

  constructor(private database: DatabaseService, private loadingCtrl: LoadingController) { }

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

    this.pantdata = this.pantdata.pipe(
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
    this.pantdata = this.database.getPants();
    this.searching = false;
     
  }

}
