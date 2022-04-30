import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from '../interfaces/interfaces';

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

}
