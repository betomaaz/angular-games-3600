import { Component, OnInit } from '@angular/core';
import { genre } from 'src/app/interfaces/interfaces';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-mantgenres',
  templateUrl: './mantgenres.component.html',
  styleUrls: ['./mantgenres.component.css']
})
export class MantgenresComponent implements OnInit {

  constructor(private service:GenresService) { }

  genre:genre[]=[]

  ngOnInit(): void {
    this.getGenres();
  }

  deleteGenres(genre:any){
    this.service.deleteGenres(genre._id).subscribe((resp:any)=>{
      if(resp.ok){
        this.getGenres();
      }
    })
  }

  getGenres(){
    this.service.getGenres().subscribe(resp=>{
      if(resp.ok){
        this.genre = resp.genre;
      }
    })
  }

}
