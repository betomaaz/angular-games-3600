import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { MantgamesComponent } from './mantgames/mantgames.component';
import { RegistryComponent } from './registry/registry.component';
import { MantgenresComponent } from './mantgenres/mantgenres.component';
import { RegistrygenresComponent } from './registrygenres/registrygenres.component';
import { UpdategenresComponent } from './updategenres/updategenres.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFountComponent,
    LoginComponent,
    MantgamesComponent,
    RegistryComponent,
    MantgenresComponent,
    RegistrygenresComponent,
    UpdategenresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
