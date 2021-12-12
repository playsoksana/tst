import { Injectable, Input, Output, Query, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactsClientService {

  constructor(
    private http: HttpClient) { }

    getContacts(){
        return this.http.get('api/contactsState');
    
    }

    addContact(obj: any) {

return this.http.post('api/contactsState', obj)
    }

    editContact(contact: any) {
      return this.http.put(`api/contactsState/${contact.id}`, contact)
    }

    delete(id: any) {
      return this.http.delete(`api/contactsState/${id}`)
    }

    getContact(id: number | string) {
     return this.http.get(`api/contactsState/${id}`)
    }

returnText(v: string) {
  console.log('текст дочернего елемента', v)
}





//     name: string = "default string"
// @Input() counterValue = 0;
// @Input('step') stepCounter = 3;
// incriment() {
//   this.counterValue += this.stepCounter;
// }
// }

// 1) Без передачи атрибутов можно вызывать incriment() при клике и менять значенния
// 2) Можно при создании тега компонента передать в декоратор @Input <app-component name='text' counterValue='1000'> 
// все это перезатрет дефолтные значения и в компоненте будут новые 

// 3) Можно при создании тега компонента передать в декоратор @Input <app-component [name]="'text'" [counterValue]='variable'> 
// все это перезатрет дефолтные значения и в компоненте будут новые 

// <!-- DECORATORS -->
// 4) @Output() MyOwnEvent: EventEmitter<string> = new EventEmitter();
// вызов из функции 
//  this.MyOwnEvent.emit(value)
//  <app-child (myOwnEvent)='nativeFunc($event)'
//  В родителе.ts
//  nativeFunc(value) {
//   return this.varib = value
//  }




// @ViewChild захват метода ребенка родителем только первого компонента
// у ребенка childComponent
// childMetod() {

// }
// у родитуля 
// @ViewChild(childComponent): childBlock: childComponent;
// METHODS() {
//   this.childBlock.childMetod()
// }


// @ViewChild захват метода ребенка родителем конкретно
// у ребенка childComponent <app-chold #mark>
// childMetod() {

// }
// у родитуля 
// @ViewChild('mark'): childBlock: childComponent;
// METHODS() {
//   this.childBlock.childMetod()
// }
// ============================================================================
// ИЛИ @ViewChild('mark'): childBlock: ElementRef;
// METHODS() {;
//   this.childBlock.nativeElemement.childMetod()
//   this.childBlock.nativeElemement.value
// }

// УСЛИ МНОГО ЧИЛДРЕНОВ НА КОТОРЫЕ НУЖНО ВЛИЯТЬ по #mark
// @ViewChildren('mark'): childBlock: QueryList<any>;
// METHODS() {;
//   this.childBlock.forEach(block=>block.childMetod())
// }


// УСЛИ МНОГО ЧИЛДРЕНОВ НА КОТОРЫЕ НУЖНО ВЛИЯТЬ компонент
// @ViewChildren('childComponent'): childBlock: QueryList<childComponent>;
// METHODS() {;
//   this.childBlock.forEach(block=>block.childMetod())
//
 }
