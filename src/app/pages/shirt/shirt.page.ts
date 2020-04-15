import { Component, OnInit } from '@angular/core';
import { PantPage } from '../pant/pant.page';


@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.page.html',
  styleUrls: ['./shirt.page.scss'],
})
export class ShirtPage implements OnInit {
 rootPage:any;
  constructor() {}


  ngOnInit() {
  }

  go(){
    this.rootPage = PantPage;
  }

}
