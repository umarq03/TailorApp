import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting, starterSetting, emailSetting } from 'src/app/services/database.service';
import { Network } from '@ionic-native/network/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  private emailSetting: Observable<emailSetting[]>;

  constructor(private emailComposer: EmailComposer,private database: DatabaseService,
    private network: Network, private toastCtrl: ToastController,private loadingCtrl: LoadingController) {
      this.network.onDisconnect().subscribe(()=>{
        this.showToast('Network was disconnected!')
      });
      
      this.network.onConnect().subscribe(()=>{
  
        setTimeout(() => {
          this.showToast('You got a '+''+this.network.type+'connection, woooho!');
        });
      });
     }

  ngOnInit() {
    this.emailSetting = this.database.getEmailSettings();

  }
  ionViewWillEnter(){
    this.loaddata();
  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  sendEmail() {

 this.emailComposer.open({
   to:'{{setting.email}}',
   subject:'Any',
   isHtml:true
 });

  }

  async loaddata(){
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: '',
      duration: 1000
    });
    await loading.present();
  }

}
