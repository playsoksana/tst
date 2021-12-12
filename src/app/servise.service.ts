import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiseService {

  constructor() { }

  count = 50;

  incriment() {
    console.log('@@@@@@@@@@@', this.count)

this.count++;
  }
  dicriment() {
this.count--;
  }

  getCount() {
    return this.count;
  }

  getData() {
    let data = [];
    for (let i = 0; i < 8; i += 1) {
      data.push('Element #' + i)
    }
    return data;
  }

  
  
}
