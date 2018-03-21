import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';


import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor() { }

  content='';
  i=0;
  @Output() dataInput= new EventEmitter();
  addData(){
    this.dataInput.emit(this.content);
    this.content = '';
  }
  ngOnInit() {
  }

}
