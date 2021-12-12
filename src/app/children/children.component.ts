import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input() value= 'default';

  

  @ContentChildren('superChild') superChidren: QueryList<any> | undefined;




  childMetod(): void {
    
    // console.log(this.value, 'value')
    console.log(this.value, 'metod is location in child');

   this.superChidren?.forEach(e => console.log(e))
  }



hhhhhh () {
  console.log('this is hhhhhh')
}






  constructor(
  
  ) { }

  ngOnInit(): void {

  }




}
