import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MantgamesComponent } from './pages/mantenedores/games/mantgames/mantgames.component';
import { NotFountComponent } from './pages/not-fount/not-fount.component';
import { RegistryComponent } from './pages/registry/registry.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'mantgenres',
    loadChildren:()=>import('./pages/mantenedores/genres/genres.module').then(m=>m.GenresModule),
    //canLoad:[UserGuard]
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
