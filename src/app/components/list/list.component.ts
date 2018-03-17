import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() dataArr=[];
  @Output() finArr=[];
  changeData1(i){
    this.finArr.push(this.dataArr[i]);
    this.dataArr.splice(i,1);
  }
  changeData2(i){
    this.dataArr.push(this.finArr[i]);
    this.finArr.splice(i,1);
  }
  delete1(i){
    this.dataArr.splice(i,1);
  }
  delete2(i){
    this.finArr.splice(i,1);
  }
  ngOnInit() {
  }

}
