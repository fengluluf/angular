//import { Http,Jsonp } from '@angular/http'; 
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Http,Jsonp } from '@angular/http';

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

   constructor(public http:Http,public jsonp:Jsonp,public router:Router){}
  // @Input() list:Array<any>;
  list = [1,2,3,4,5];
  goDetile(i){
    this.router.navigate(['/detile',i]);
    console.log(i);
  }
  ngOnInit() {
    //console.log(this.route.snapshot.params);
    this.jsonp.get( ' http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe(data=>{ 
      console.log(data['_body']);
      this.list = (data['_body']);
     } ,err=>{
      console.log(err);
    });
    //this.jsonp.get( 'http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK' ).subscribe( data=>{  } );
    
    
  }
}
