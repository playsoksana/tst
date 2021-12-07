import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsClientService } from 'src/app/contacts/contacts-client.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private service: ContactsClientService
  ) {}

  formEdit: FormGroup = Object();
  id: any = null;
  contactsList: any = [];
  contact: any;

  onSubmit(form: any, event: any) {
  event.preventDefault();
  this.router.navigate(['/'])
    this.service
      .editContact({ ...form.value })
      .subscribe((data) => {
        this.getContacts();
      });
  }

  getContact() {
    this.contactsList.forEach((e: any) => {
      if (e.id.toString() === this.id) {
        this.contact = e;
      }
    });
  }

  removeContact(id: any) {
    this.router.navigate(['/']);
    this.service.delete(id).subscribe(data => {
this.getContacts()
    })
  }

  ngOnInit(): void {
    this.getContacts();
    this.activatedRouter.params.forEach((param) => (this.id = param['id']));

    this.formEdit = new FormGroup({
      nameUser: new FormControl(this.contact.name),
      phone: new FormControl('1'),
      address: new FormControl('1'),
      email: new FormControl('1'),
    });
  }

  getContacts() {
    this.service.getContacts().subscribe((data) => {
      this.contactsList = data;
      this.getContact();
    });
  }
}
