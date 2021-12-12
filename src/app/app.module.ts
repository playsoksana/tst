import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsService } from '../app/contacts/contacts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts';
import { CardComponent } from './card/card.component';
import { ChildrenComponent } from './children/children.component';
import { ParentComponent } from './parent/parent.component';
import { TemplateComponent } from './template/template.component';
import { LivecycleComponent } from './livecycle/livecycle.component';
import { LivecyclebtnComponent } from './livecyclebtn/livecyclebtn.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardsBlockComponent } from './cards-block/cards-block.component';
import { ServiseService } from './servise.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    CardComponent,
    ParentComponent,
    ChildrenComponent,
    TemplateComponent,
    LivecycleComponent,
    LivecyclebtnComponent,
    CardsContainerComponent,
    CardsBlockComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ContactsService, {delay: 700}),

  ],
  // providers: [ServiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
