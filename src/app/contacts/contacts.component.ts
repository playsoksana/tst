import { Component, OnInit } from '@angular/core';
import { ContactsClientService } from './contacts-client.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  registrationForm: FormGroup = Object();
  contactsList: any;

  constructor(private service: ContactsClientService) {}

  getContacts() {
    this.service.getContacts().subscribe((data) => {
      this.contactsList = data;
    });
  }

  onSubmit(form: any) {
    this.service
      .addContact({ id: this.contactsList.length + 1, ...form.value })
      .subscribe((data) => {
        this.contactsList.push(data);
      });
  }

  returnText(v: any) {
    console.log(v)
  }

  funColor(e:string) {
console.log(e)
  }

  ngOnInit(): void {
    this.getContacts();
    this.registrationForm = new FormGroup({
      nameUser: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
    });
  }
}

class Piple {

  constructor(x:number) {
this.x = x
  }
  x: number
}

const one = new Piple (5)