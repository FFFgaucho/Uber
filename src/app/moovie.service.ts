import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoovieService {

  constructor(public http:Http) { 
    console.log("Hello provider")
  }
  getLatestMovies(){
    this.http.get("http://")
  }
}
