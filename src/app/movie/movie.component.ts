import { Component, OnInit,Input,OnChanges, SimpleChange,SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '.././movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnChanges,OnInit {

  constructor(private _movieService: MovieService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

    moviesDetails;
    errorMessage: string;
    @Input("id") id;
    
  
  // backHome(){
  //    this._router.navigate(['/']);
  // }
  ngOnChanges(changes: SimpleChanges) {
    const id: SimpleChange = changes.id;
    console.log('prev value: ', id.previousValue);
    console.log('got name: ', id.currentValue);
    this.id = id.currentValue;
    if(this.id){
      this._movieService.movieDetail(this.id)
        .subscribe(data => this.moviesDetails = data, error => this.errorMessage = error)
          console.log(this.errorMessage);
    
    }
  }
  ngOnInit() {

  	// this.id = this._activatedRoute.snapshot.params['id'];
    if(this.id){
  	this._movieService.movieDetail(this.id)
  		.subscribe(data => this.moviesDetails = data, error => this.errorMessage = error)
        console.log(this.errorMessage);
  
  }
}

}