import { Component,NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http,Headers } from '@angular/http';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  text:string;
  password:string;
  presentAlert1() {
    let alert = this.alertCtrl.create({
      title: '错误',
      subTitle: '用户名不存在',
      buttons: ['确定']
    });
    alert.present();
  }
  presentAlert2() {
    let alert = this.alertCtrl.create({
      title: '错误',
      subTitle: '用户名或密码错误',
      buttons: ['确定']
    });
    alert.present();
  }
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  sub(){
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',JSON.stringify({status:'login',userID:this.text,password:this.password}),{headers:this.headers}).subscribe(data=>{
      console.log(data['_body']);
        if(data['_body']==0){
          this.presentAlert1();
        }
        else if(data['_body']==2){
          this.presentAlert2();
        }
        else{
          this.navCtrl.push(HomePage);
        }   
    }),err=>{
      console.log(err);
    };
  };
  
}
