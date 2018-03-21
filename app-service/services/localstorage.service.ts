import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }
  setItem(a,value){
    localStorage.setItem(a,JSON.stringify(value));
  }
  getItem(){}
  remove(){}
}
