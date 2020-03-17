import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-skfab',
  templateUrl: './skfab.page.html',
  styleUrls: ['./skfab.page.scss'],
})
export class SkfabPage implements OnInit {
  
  galleryType = "summer";

  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    // console.log('Segment changed', ev);
  }
  openPreview(img: any){

    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
          img : img
      }
    }).then(modal => modal.present());
  }

  // openPreview1(img1: any){

  //   this.modalController.create({
  //     component: ImageModalPage,
  //     componentProps: {
  //         img : img1
  //     }
  //   }).then(modal => modal.present());

  // }



}
