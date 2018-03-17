import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data:string;
  add(){
    this.dataArr.push(this.data);
    this.data = '';
  }
  dataArr=[];
  ngOnInit(){
    console.log(this.dataArr);
  }
  finarr=[];
  changeData1(i){
    this.finarr.push(this.dataArr[i]);
    this.dataArr.splice(i,1);
  }
  changeData2(i){
    this.dataArr.push(this.finarr[i]);
    this.finarr.splice(i,1);
  }
  delete1(i){
    this.dataArr.splice(i,1);
  }
  delete2(i){
    this.finarr.splice(i,1);
  }
}
