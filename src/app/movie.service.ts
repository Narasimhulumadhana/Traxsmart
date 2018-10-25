import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs';
import {map,catchError } from 'rxjs/operators';

@Injectable()
export class MovieService {

  constructor(private _http: Http) { }

  get(name){
  	return this._http.get(`https://www.omdbapi.com/?s=${name}&apikey=c6d31a02`).pipe(
  	map((data: Response) => data.json())).pipe(
  	catchError(this.handleErr)
     )}

  movieDetail(id){
  	return this._http.get(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=c6d31a02`).pipe(
  	map((data: Response) => data.json())).pipe(
  	catchError(this.handleErr)
    )}

    private handleErr(error){
  	return Observable.throw(error.json().error);
  }

}