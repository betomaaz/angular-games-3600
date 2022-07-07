import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { genre, genreResponse } from '../interfaces/interfaces';

const url = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http:HttpClient) { }

  getGenres(){
    return this.http.get<genreResponse>(`${url}/genre`);
  }

  postGenres(genre:genre){
    return this.http.post(`${url}/genre`,genre)
  }

  getGenresById(id:string){
    return this.http.get(`${url}/genre/byid/${id}`)
  }

  putGenres(genre:genre){
    return this.http.put(`${url}/genre/`,genre)
  }

  deleteGenres(id:string){
    return this.http.delete(`${url}/genre?id=${id}`)
  }
}
