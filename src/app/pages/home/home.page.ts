import { Component, OnInit} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {Router} from '@angular/router';
import { MenuController, IonTabs } from '@ionic/angular';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tabBarElement:any;
 

  slideOpts = {

    initialSlide : 0,
    speed : 400
  };

  constructor(private router: Router, private menu: MenuController) { 

    this.menu.enable(true, "second");
    
  }
  
 


  ngOnInit() {
  }

 

  navigatetologin(){

    this.router.navigate(['/login']);
  }
 
  

 

}
