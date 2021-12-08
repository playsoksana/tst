import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsClientService } from 'src/app/contacts/contacts-client.service';


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
  ) {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
  }

  id: string | null;
  contact: any;

  onSubmitContact(form: any) {
  const updatedContact = {
    id: this.id,
    nameUser: form.nameUser.value,
    phone: form.phone.value,
    address: form.address.value,
    email: form.email.value
  }

   
    this.router.navigate(['/']);
    this.service.editContact(updatedContact).subscribe((data) => {});
  }
  removeContact(id: string) {
    this.router.navigate(['/']);

    this.service.delete(id).subscribe((data) => {});
  }

  ngOnInit(): void {
    this.getContact(this.id);

  }

  getContact(id: any) {
    this.service.getContact(id).subscribe((data) => {
      this.contact = data;
    });
  }
}


    // let x = new BehaviorSubject<any>;
    // console.log(this.activatedRouter.params)
    // this.activatedRouter.params.forEach((param) => (this.id = param['id']));