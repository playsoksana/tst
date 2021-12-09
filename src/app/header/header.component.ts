import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
img = './assets/logo.png';
width = '30'
  constructor() { }
public flag: boolean = true;
changeColor(): void  {
  this.flag = !this.flag;
}


  ngOnInit(): void {
  }

}
