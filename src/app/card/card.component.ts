import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Output() metodfromParent: EventEmitter<any> = new EventEmitter;
@Output() changeColorParent: EventEmitter<any> = new EventEmitter;
metod(v: any) {

this.metodfromParent.emit(v.textContent)
}

@Input() value ='cbfgbgf';

  constructor() { }

  ngOnInit(): void {
    console.log(this.value)
  }

  newText:string = 'Старый текст'

  changeColor(v:string) {
    this.changeColorParent.emit(v)
  }

}
