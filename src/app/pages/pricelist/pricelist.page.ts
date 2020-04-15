import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

export interface Config {
  ratelist: string;
}

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.page.html',
  styleUrls: ['./pricelist.page.scss'],
})


export class PricelistPage implements OnInit {


  constructor
  (
    private menu: MenuController, private _HTTP: HttpClient) 
    
  {
    this.menu.swipeGesture(false);
   
  
    
  }

  ngOnInit() {
  }



}
