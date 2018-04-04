import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  items=[1,2,3,4];
  constructor(public navCtrl: NavController) {
    for(let i=0;i<5;i++){
      this.items.push(this.items.length);
    }
  }
  
  doInfinite(infiniteScoll){
    setTimeout(()=>{
      for(let i=0;i<5;i++){
        this.items.push(this.items.length);
      }
      infiniteScoll.complete();
      if(this.items.length>100){
        infiniteScoll.enable(false);
      }
    },500);
  }

}
