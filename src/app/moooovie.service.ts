import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoooovieService {

  public items: any = []; //para teste
  public lista_filmes = new Array<any>();


  constructor( public http:Http) { 
  }
  getApi(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=8534a98ab60ad65e84061b04220ce97b");
  }
  setListaFilmes(obj: any){
    this.lista_filmes = obj;
  }
  filterFilmes(searchTerm) { //para teste
    return this.lista_filmes.filter(filme => {
      return filme.original_title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
