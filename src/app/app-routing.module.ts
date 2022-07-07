import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MantgamesComponent } from './pages/mantgames/mantgames.component';
import { MantgenresComponent } from './pages/mantgenres/mantgenres.component';
import { NotFountComponent } from './pages/not-fount/not-fount.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { RegistrygenresComponent } from './pages/registrygenres/registrygenres.component';
import { UpdategenresComponent } from './pages/updategenres/updategenres.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registry',
    component:RegistryComponent
  },
  {
    path:'mantgames',
    component:MantgamesComponent
  },
  {
    path:'mantgenres',
    component:MantgenresComponent
  },
  {
    path:'registrygenres',
    component:RegistrygenresComponent
  },
  {
    path:'updategenres',
    component:UpdategenresComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFountComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
