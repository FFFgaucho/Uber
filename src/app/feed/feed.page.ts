import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { MoooovieService } from '../moooovie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
        MoooovieService 
  ]
})
export class FeedPage implements OnInit {
 // public nome_usuario:string = "Felipe Freitas";
  
  public lista_filmes = new Array<any>();
  public searchTerm: string = "";
  public resp: any;

  constructor(
    private router: Router,
    private testProvider: MoooovieService) { }

  ngOnInit() { //código do que acontece na página quando chama 
    this.getMovies();
  }

  getMovies(){
    this.resp = this.testProvider.getApi();
    this.resp.subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        //cópia para provider
        this.testProvider.setListaFilmes(this.lista_filmes);
      },
      error=>{
        console.log(error);
      }
    ); 
  }

  filtro(){
    this.lista_filmes=this.testProvider.filterFilmes(this.searchTerm);       
  }
}



