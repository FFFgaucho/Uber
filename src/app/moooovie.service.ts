import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoooovieService {

  public items: any = []; //para teste
  public lista_filmes = new Array<any>();
  resp: any;


  constructor( public http:Http) { 
  }
  getApi(){
    this.resp = this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=8534a98ab60ad65e84061b04220ce97b");
    this.resp.subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        //cópia para provider
        //this.testProvider.setListaFilmes(this.lista_filmes);
        console.log("provider");
        console.log(this.lista_filmes);
      },
      error=>{
        console.log(error);
      }
    );

    return this.lista_filmes; 

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
