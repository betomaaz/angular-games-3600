import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantgenresComponent } from './mantgenres/mantgenres.component';
import { RegistrygenresComponent } from './registrygenres/registrygenres.component';
import { UpdategenresComponent } from './updategenres/updategenres.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GenresRoutingModule } from './genres-routing.module';



@NgModule({
  declarations: [
    MantgenresComponent,
    RegistrygenresComponent,
    UpdategenresComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
