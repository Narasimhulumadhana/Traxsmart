import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any[];
  errorMessage: string;
  id:any;
  constructor(private _movieService: MovieService) { }

  search(name){
  
  	this._movieService.get(name)
  		.subscribe(data => this.movies = data.Search, error => this.errorMessage = error)
        console.log(this.movies);
        console.log(this.errorMessage);
        if(this.movies){
         this.id=this.movies[0].imdbID;
         console.log(this.id);
        }
  }
  ChangeId(id){
    this.id=id;
  }
  ngOnInit() {
    
  }
}
