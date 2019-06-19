import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoooovieService {
  
  public items: any = []; //para teste
  
  constructor( public http:Http) { 
    this.items = [
      { title: "one" },
      { title: "two" },
      { title: "three" },
      { title: "four" },
      { title: "five" },
      { title: "six" }
    ];
  }
  getLatestMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=8534a98ab60ad65e84061b04220ce97b")  
  }
  
  filterItems(searchTerm) { //para teste
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
