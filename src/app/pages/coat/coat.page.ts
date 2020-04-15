import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DesignsPage } from '../designs/designs.page';

@Component({
  selector: 'app-coat',
  templateUrl: './coat.page.html',
  styleUrls: ['./coat.page.scss'],
})
export class CoatPage implements OnInit {


// url: string = 'assets/fabric/shalwarkameez/summer/1.jpg';


  constructor( private menu: MenuController, private router: Router) {
    // this.menu.enable(true, 'first');
   }

  ngOnInit() {
  }

  // getData(){

    

  //   this.router.navigate(['/designs' ,{url:this.url}]);
  // }

}
