import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './index'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactComponent,
    FormsModule,
     ReactiveFormsModule 
  ]
})
export class ContactModule { }
