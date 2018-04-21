import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { PublishPage } from '../publish/publish';
import { SettingPage } from '../setting/setting';
/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl:ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }
  sub(){
    this.navCtrl.push(PublishPage);
  }
  set(){
    this.navCtrl.push(SettingPage);
  }

}
