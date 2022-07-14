import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantgenresComponent } from './mantgenres/mantgenres.component';
import { RegistrygenresComponent } from './registrygenres/registrygenres.component';
import { UpdategenresComponent } from './updategenres/updategenres.component';

const routes : Routes = [
  {
  path:'',
  component:MantgenresComponent
},
{
  path:'new',
  component:RegistrygenresComponent
},
{
  path:'update',
  component:UpdategenresComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class GenresRoutingModule { }
