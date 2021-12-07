import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './index';
import { ContactComponent } from '../contact/contact/contact.component';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactsComponent,
    ReactiveFormsModule

  ]
})
export class ContactsModule { }
