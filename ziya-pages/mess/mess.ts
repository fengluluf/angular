import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mess',
  templateUrl: 'mess.html',
})
export class MessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('name'));
    var name = this.navParams.get('name');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessPage');
  }
  back(){
    this.navCtrl.pop();
    console.log("back");
  }
}
