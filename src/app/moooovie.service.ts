import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoooovieService {
  public resp: any;
  public items: any = []; //para teste
  public lista_filmes = new Array<any>();


  constructor( public http:Http) { 
    this.items = [
      { title: "one" },
      { title: "two" },
      { title: "three" },
      { title: "four" },
      { title: "five" },
      { title: "six" }
    ];
    this.getLatestMovies();

  }
  getLatestMovies(){
    this.resp = this.getApi();
    this.resp.subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        //this.lista_temp=this.lista_filmes; //cópia 
        console.log(this.lista_filmes);
        console.log("Mudou");
        //console.log(this.lista_temp);
        
      },
      error=>{
        console.log(error);
      }
    ); 
  }
  getApi(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=8534a98ab60ad65e84061b04220ce97b");
  }
  filterFilmes(searchTerm) { //para teste
    return this.lista_filmes.filter(filme => {
      return filme.original_title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  
  filterItems(searchTerm) { //para teste
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
