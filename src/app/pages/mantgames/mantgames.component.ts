import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Juego } from 'src/app/interfaces/interfaces';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-mantgames',
  templateUrl: './mantgames.component.html',
  styleUrls: ['./mantgames.component.css']
})
export class MantgamesComponent implements OnInit {

  newGame : Juego = {}

  constructor(
    private fb:FormBuilder, 
    private gameService:GamesService,
    private router:Router
    ) { }

  newGameForm:FormGroup = this.fb.group({
    "titulo" : new FormControl(null, Validators.required),
    "descripcion" : new FormControl(null, Validators.required),
    "ano" : new FormControl(null, Validators.required),
    "portada" : new FormControl(null, Validators.required),

  })

  ngOnInit(): void {
  }



  get titulo(){
    return this.newGameForm.get("titulo");
  }

  get descripcion(){
    return this.newGameForm.get("descripcion");
  }

  get ano(){
    return this.newGameForm.get("ano");
  }

  get portada(){
    return this.newGameForm.get("portada");
  }

  submitForm(){
    if(this.newGameForm.valid){
      this.newGame.titulo = this.titulo?.value;
      this.newGame.descripcion = this.descripcion?.value;
      this.newGame.ano = this.ano?.value;
      this.newGame.portada = this.portada?.value;
      this.gameService.postGame(this.newGame)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigate(['/home'])
      })
    }
  }

}
