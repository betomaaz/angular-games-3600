import { Component, OnInit } from '@angular/core';
import { Game, Juego } from 'src/app/interfaces/interfaces';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

/*   gameList:Game[] = []
  textSearch:string="";
  loading:boolean=false;
  loadingHome:boolean=false; */

  gameList:Juego[] = []
  textSearch:string="";
  loading:boolean=false;
  loadingHome:boolean=false;

  constructor(private service:GamesService) { }

  ngOnInit(): void {
/*     this.loadingHome=true;
      this.service.getDataGames()
      .subscribe(resp=>{
        console.log(resp.results)
        this.gameList = resp.results;
      })
      setTimeout(() =>{
        this.loadingHome=true
      },1800)
        this.loadingHome=false
  } */
  
    this.loadingHome=true;
      this.service.getDataGamesLocal()
      .subscribe(resp=>{
        console.log(resp)
        this.gameList = resp;
      })
      setTimeout(() =>{
        this.loadingHome=true
      },1800)
        this.loadingHome=false
  }
  

  onClickSearch(){
/*     this.loading=true;
    this.gameList = []
    console.log("Click en buscar:"+this.textSearch);

    setTimeout(() => {
      this.service.searchDataGames(this.textSearch)
    .subscribe(resp=>{
      this.loading=false;
      console.log(resp.results);
      if(resp.count != 0){
        this.gameList=resp.results;
      } else {
        this.gameList = []
      }
    })
    }, 2500); */
    
  }

}