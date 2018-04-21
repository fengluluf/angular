import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { MessPage } from '../mess/mess';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  
  friend0(){
    this.navCtrl.push(MessPage,{name:"friend0"});
  }
  friend1(){
    this.navCtrl.push(MessPage,{name:"friend1"});
  }
  friend2(){
    this.navCtrl.push(MessPage,{name:"friend2"});
  }
  friend3(){
    this.navCtrl.push(MessPage,{name:"friend3"});
  }
  friend4(){
    this.navCtrl.push(MessPage,{name:"friend4"});
  }
}
