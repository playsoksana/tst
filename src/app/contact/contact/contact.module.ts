import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './index'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactComponent,

     ReactiveFormsModule 
  ]
})
export class ContactModule { }
