import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResult, Game, GameResponse, Juego } from '../interfaces/interfaces';

const url = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  getDataGames() {
    return this.http.get<ApiResult>('https://api.rawg.io/api/games?key=0198deb6a69d4edbbc199e11a45f1d9f&search=');
  }

  searchDataGames(text:string){
    return this.http.get<ApiResult>(`https://api.rawg.io/api/games?key=0198deb6a69d4edbbc199e11a45f1d9f&search=${text}`);
  }

  getDataGamesLocal() {
    return this.http.get<GameResponse>(`${url}/Game`);
  }

  postGame(game:Juego){
    return this.http.post(`${url}/Game`,game);
  }

}
