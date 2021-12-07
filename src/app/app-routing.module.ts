import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ContactModule} from './contact/contact/contact.module';




import { ContactComponent } from './contact/contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path : "", component: ContactsComponent},
  {path: "contacts/:id", component: ContactComponent},
  // {path: "contacts/:id",
  //  loadChildren:()=>import('./contact/contact/contact.module').then(mod=> mod.ContactModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
