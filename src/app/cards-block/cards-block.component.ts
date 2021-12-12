import { Component, Input, AfterViewChecked, ContentChild, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cards-block',
  templateUrl: './cards-block.component.html',
  styleUrls: ['./cards-block.component.css'],

})
export class CardsBlockComponent implements OnInit, AfterViewChecked {
@Input() showDescription: boolean = false;
@Output() openDescription: EventEmitter<void> = new EventEmitter();


@ContentChild('b') block: ElementRef<any> | undefined;

rose = 'ddd';
  constructor() { }

color: string = 'white'
  counter: number = 0

  ngAfterViewChecked(): void {
    this.counter ++;
// console.log(this.counter, this, 25)

  }

  ngOnInit(): void {
    
  }


  discount() {
    console.log(1111111111111)
  }

  onClick() {
    this.color = this.block?.nativeElement.textContent;
  this.openDescription.emit();

  }

  


}
