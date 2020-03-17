import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.page.html',
  styleUrls: ['./shirt.page.scss'],
})
export class ShirtPage implements OnInit {

  constructor( private menu: MenuController) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {
  }

}
