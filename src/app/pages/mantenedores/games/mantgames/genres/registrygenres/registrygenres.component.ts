import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { genre } from 'src/app/interfaces/interfaces';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-registrygenres',
  templateUrl: './registrygenres.component.html',
  styleUrls: ['./registrygenres.component.css']
})
export class RegistrygenresComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: GenresService,
    private router:  Router
    ) { }

  newGenre:genre = {}

  genreForm : FormGroup = this.fb.group({
    "name" : new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }

  submitForm(){
    if(this.genreForm.valid){
      this.newGenre.name = this.name?.value;
      this.service.postGenres(this.newGenre).subscribe((resp:any)=>{
        if(resp.ok){
          this.router.navigate(['mantgenres']);
        }
      })
    }
  }

  get name(){
    return this.genreForm.get('name');
  }

}
