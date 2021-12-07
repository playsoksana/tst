import { Injectable } from '@angular/core';
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
// Нflj nайти метод получения по id
    // getId(id: number | string) {
    //  return this.http.get('api/contactsState', id???)
    // }
    
}
