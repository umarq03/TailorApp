import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatabaseService, WaistCoat } from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-wcoatdatabase',
  templateUrl: './wcoatdatabase.page.html',
  styleUrls: ['./wcoatdatabase.page.scss'],
})
export class WcoatdatabasePage implements OnInit {
  private waistcoatdata: Observable<WaistCoat[]>;
  offset = 0;
  searching: boolean = true;
  constructor(private database: DatabaseService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getDatabase();
    this.waistcoatdata.subscribe(()=> this.searching = false);

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

    this.waistcoatdata = this.waistcoatdata.pipe(
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
    this.waistcoatdata = this.database.getWaistCoats();
     
  }
}
