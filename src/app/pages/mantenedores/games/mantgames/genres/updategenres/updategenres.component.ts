import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { genre } from 'src/app/interfaces/interfaces';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-updategenres',
  templateUrl: './updategenres.component.html',
  styleUrls: ['./updategenres.component.css']
})
export class UpdategenresComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: GenresService,
    private router:  Router,
    private route: ActivatedRoute
    ) { }

  genreUpdated:genre = {}

  genreUpdateForm : FormGroup = this.fb.group({
    "name" : new FormControl('',Validators.required)
  })

  ngOnInit(): void {
    
    this.route.queryParams.subscribe((resp:any)=>{
      
      this.service.getGenresById(resp.id).subscribe((resp:any)=>{
        if(resp.ok){
          this.genreUpdated = resp.genreDb
          this.genreUpdateForm.get('name')?.setValue(this.genreUpdated.name);
        console.log(resp);
        }
      })
      console.log(resp.id);
    })

  }

  submitForm(){
    if(this.genreUpdateForm.valid){
      this.genreUpdated.name = this.name?.value;
      this.service.putGenres(this.genreUpdated).subscribe((resp:any)=>{
        if(resp.ok){
          this.router.navigate(['mantgenres']);
        }
      })
    }
  }

  get name(){
    return this.genreUpdateForm.get('name');
  }

}
