import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsClientService } from 'src/app/contacts/contacts-client.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, DoCheck {
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private service: ContactsClientService,

  ) {
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
  }



  id: string | null;
  formEdit: any
  contactsList: any = [];
  contact: any;

  onSubmitContact(form: any) {
console.log(form);
  this.router.navigate(['/']);
    this.service.editContact({ ...form.value })
      .subscribe((data) => {
        this.getContacts();
      });
  }

  getContact() {
    console.log(this. contactsList);
    this.contactsList.forEach((e: any) => {
      if (e.id.toString() === this.id) {
        this.contact = e;
      }
    });

    this.formEdit = new FormGroup({
 
      nameUser: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      email: new FormControl(),
    });
  }

  removeContact(id: any) {
    this.router.navigate(['/']);
    this.service.delete(id).subscribe(data => {

    })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.contactsList)
    // let x = new BehaviorSubject<any>;
      // console.log(this.activatedRouter.params)
      // this.activatedRouter.params.forEach((param) => (this.id = param['id']));
    this.getContacts();
 
    

   
  }

  getContacts() {
console.log(this.service.getContacts())


    this.service.getContacts().subscribe((data) => {
      this.contactsList = data;
      this.getContact();
    });
  }
  // ============================================================

  ngDoCheck() {
    console.log('DoCheck')
  }






}
