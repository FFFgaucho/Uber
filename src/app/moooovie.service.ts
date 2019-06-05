import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoooovieService {

  constructor( public http:Http) { 

  }
  getLatestMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/76341?api_key=8534a98ab60ad65e84061b04220ce97b")
  }
}
