import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoovieService {

  constructor(public http:Http) { 

  }
  getLatestMovies(){
    this.http.get("http://")
  }
}
  