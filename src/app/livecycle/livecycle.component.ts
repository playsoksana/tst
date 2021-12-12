import { Component, ViewChild, OnInit,
   OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, SimpleChanges,
     Input, ViewChildren, ElementRef, ChangeDetectorRef } from '@angular/core';
import { LivecyclebtnComponent } from '../livecyclebtn/livecyclebtn.component';

@Component({
  selector: 'app-livecycle',
  templateUrl: './livecycle.component.html',
  styleUrls: ['./livecycle.component.css']
})
export class LivecycleComponent implements  OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewInit  {

  @ViewChild(LivecyclebtnComponent) childCom: LivecyclebtnComponent | undefined;
  @ViewChild('btn') btn: ElementRef| undefined;


@Input() val: any;

  counter: number = 0;

  constructor(private cdRef: ChangeDetectorRef) { }
  ngOnInit(): void {
    console.log("0) ngOnInit")
  }


  ngDoCheck(): void {
    console.log("1)  ngDoCheck")
  } 

  ngAfterContentInit(): void {
    console.log("2) ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("3) ngAfterContentChecked")
  }


  ngAfterViewInit(): void {
console.log("4)  ngAfterViewInit", this.childCom?.value);
console.log("4)  ngAfterViewInit", this.btn?.nativeElement)
  }
 
  ngAfterViewChecked(): void {
    console.log("5) ngAfterViewChecked");
    this.childCom?.changeText();
    this.cdRef.detectChanges();
  }

 
  ngOnChanges(changes: SimpleChanges): void {
    console.log(" -1) Передано значение в ngOnChanges");
    console.log(changes)
  }

  addCounter() {
  console.log('COUNTER!!!!', this.counter)
  this.counter++;
}

}
