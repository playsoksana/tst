import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livecyclebtn',
  templateUrl: './livecyclebtn.component.html',
  styleUrls: ['./livecyclebtn.component.css']
})
export class LivecyclebtnComponent implements OnInit {
value = 555;
  constructor() { }

  text = 'старый техт!!!!!!!!!';


  changeText() {
    this.text = 'New Text is here'
  }
  ngOnInit(): void {
  }

}
