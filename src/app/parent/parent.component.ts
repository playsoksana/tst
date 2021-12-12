import { Component, AfterViewInit, ContentChildren, ElementRef, OnInit, Query, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { ChildrenComponent } from '../children/children.component';
import { LivecyclebtnComponent } from '../livecyclebtn/livecyclebtn.component';
import {ServiseService} from '../servise.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // providers: [ServiseService]
})
export class ParentComponent implements OnInit{

  constructor(
   private service: ServiseService,
    ) {
  
     }
 

    @ViewChild(ChildrenComponent) methodists: ChildrenComponent | undefined;
    @ViewChild('secondViewChild') secondMethod: ElementRef | undefined;
    @ViewChildren(ChildrenComponent) components: QueryList<ChildrenComponent> | undefined; 
    @ViewChildren('secondViewChild') componentsAll: QueryList<any> | undefined;


  methodistsChildren() {
   this.methodists?.childMetod();
  //  console.log(22222, this.secondMethod?.nativeElement)
this.components?.forEach(e => e.childMetod());
this.componentsAll?.forEach(e => e.childMetod());





  }


count: number = 0; 

    plus() {
    this.service.incriment();
this.count = this.service.getCount();
         }
    
     minus() {
    this.service.dicriment();
    this.count = this.service.getCount();
         }


    elements: string[] = [];


  getCount() {
    return this.service.count;
         }
        
  ngOnInit(): void {
// this.elements = this.service.getData();
console.log(11111111111, this.elements)
    // console.log(" this.methodistsChildren",  this.methodistsChildren)
    // console.log(ElementRef)
    // console.log(ChildrenComponent)
    // console.log(111, this.methodistsChildren)
    // this.methodistsChildren?.childMetod();

  }

 


     flag: boolean = false;

     changeFlag() {
       this.flag = !this.flag;
     }


}


