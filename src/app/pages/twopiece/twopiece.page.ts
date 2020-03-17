import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-twopiece',
  templateUrl: './twopiece.page.html',
  styleUrls: ['./twopiece.page.scss'],
})
export class TwopiecePage implements OnInit {

  constructor( private menu: MenuController) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {
  }

}
