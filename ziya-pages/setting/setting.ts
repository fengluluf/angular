import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  items = ["图片质量设置",'自动播放视频设置','消息提醒设置'];
  arr = ['关于资芽','资芽公约（免责声明等）','把资芽推荐给朋友','清除缓存'];
  back(){
    this.modalCtrl.create(LoginPage).present();
  }
}
