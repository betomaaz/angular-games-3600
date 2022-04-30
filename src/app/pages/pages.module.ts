import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFountComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
