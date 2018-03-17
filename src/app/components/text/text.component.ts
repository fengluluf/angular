import { Component, OnInit ,Input,Output} from '@angular/core';
import { EventEmitter } from 'events';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor() { }

  @Input() data:string;
  @Output() dataArr= new EventEmitter();
  add(){
    this.dataArr.emit(this.data);
  }
  ngOnInit() {
  }

}
