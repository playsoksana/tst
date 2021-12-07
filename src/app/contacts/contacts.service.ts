import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ContactsService  implements InMemoryDbService {


  constructor() {

}
    createDb() {
      let contactsState = [
        { id: 1, nameUser: 'Windstorm', phone: '00000000', email: 'wwww@gmail.com', address: 'street, 5' },
        { id: 2, nameUser: 'Windstorm2', phone: '00000000', email: 'wwww@gmail.com', address: 'street, 5' }
      ];
      return {contactsState};
    }
   }
