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
    // private router: Router,
    private activatedRouter: ActivatedRoute,
    private service: ContactsClientService
  ) {}

  formEdit: FormGroup = Object();
  id: any = null;
  contactsList: any = [];
  contact: any;

  onSubmitContact() {
    console.log(111111111111111)
  // event.preventDefault();
  // this.router.navigate(['/']);
    // this.service.editContact({ ...form.value })
    //   .subscribe((data) => {
    //     this.getContacts();
    //   });
  }

  getContact() {
    this.contactsList.forEach((e: any) => {
      if (e.id.toString() === this.id) {
        this.contact = e;
      }
    });

    this.formEdit = new FormGroup({
 
      nameUser: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
    });
  }

  removeContact(id: any) {
    // this.router.navigate(['/']);
    this.service.delete(id).subscribe(data => {
this.getContacts()
    })
  }

  ngOnInit(): void {
    this.getContacts();
    this.activatedRouter.params.forEach((param) => (this.id = param['id']));

   
  }

  getContacts() {
    this.service.getContacts().subscribe((data) => {
      this.contactsList = data;
      this.getContact();
    });
  }
}
