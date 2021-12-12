import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsClientService } from 'src/app/contacts/contacts-client.service';
import { ServiseService } from 'src/app/servise.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ServiseService]
})
export class ContactComponent implements OnInit {
   
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private service: ContactsClientService,
    private serv: ServiseService
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
    this.count = this.serv.getCount();
    this.getContact(this.id);

  }

  getContact(id: any) {
    this.service.getContact(id).subscribe((data) => {
      this.contact = data;
    });
  }


  count: number = 0; 

    plus() {
    this.serv.incriment();
this.count = this.serv.getCount();


         }
    
     minus() {
    this.serv.dicriment();
    this.count = this.serv.getCount();
    
         }

         log(v: any) {
           console.log(v)
         }

}


    // let x = new BehaviorSubject<any>;
    // console.log(this.activatedRouter.params)
    // this.activatedRouter.params.forEach((param) => (this.id = param['id']));