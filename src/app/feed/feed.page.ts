import { Component, OnInit } from '@angular/core';
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
  public nome_usuario:string = "Felipe Freitas";
  public lista_filmes = new Array<any>();

  constructor(
    private router: Router,
    private testProvider: MoooovieService) { }

  ngOnInit() { //código do que acontece na página quando chama
    //this.feedselect();
    this.testProvider.getLatestMovies().subscribe(
        data=>{
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.lista_filmes = objeto_retorno.results;
          console.log(objeto_retorno.results);
        },
        error=>{
          console.log(error);
        }
    ) 
  }
  //Funçãoes relativas à página
  feedselect(){
    alert("ROdou");
  }
  
}
