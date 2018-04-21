import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { RelemesPage } from '../relemes/relemes';

/**
 * Generated class for the ReleasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-release',
  templateUrl: 'release.html',
})
export class ReleasePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReleasePage');
  }
  enter(){
    this.navCtrl.push(RelemesPage);
  }
}
