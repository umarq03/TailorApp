import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-coat',
  templateUrl: './coat.page.html',
  styleUrls: ['./coat.page.scss'],
})
export class CoatPage implements OnInit {

  constructor( private menu: MenuController) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {
  }

}
