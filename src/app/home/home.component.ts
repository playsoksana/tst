import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  index = 0
 
images = [
  'https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC_400x400.jpg',
  "https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg",
  "https://kubnews.ru/upload/iblock/95a/95a67ff5db25eb2c1b1be7720cd26896.jpg"
];
currentImage() { return this.images[this.index];}


arrText = [
  '1 kdsdddddddd',
  '2 dddddddddddd',
  '3 dddddddddddd'
]

text = '';


colorForText: string = ''

changeColor(c:string) {
this.colorForText = c
}



curValue (i: number){
  this.text = this.arrText[i]
} 

  constructor() { }

  ngOnInit(): void {
  }

  
  incrememt() {
    if (this.index === 2) {
this.index = 0;
return;
    }
this.index  = this.index + 1;


  }

  dicrement() {
    if (this.index === 0) {
      this.index = 2;
      return;
          }
   this.index = this.index - 1
  }
}
