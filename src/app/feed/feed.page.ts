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
  //public p1: ;



  constructor(
    private router: Router,
    private testProvider: MoooovieService) {
      /*this.p1 = new Promise(function(resolve, reject) {
        resolve("Success!");
        // */  
     }

  ngOnInit() { //código do que acontece na página quando chama 
    this.getMovies();
  }

  async getMovies(){
    console.log("código ts");
    
    this.lista_filmes= await this.testProvider.getApi();

    console.log(this.lista_filmes);

  }

  async filtro(){
    if(this.searchTerm ==""){

    }
    this.lista_filmes= await this.testProvider.filterFilmes(this.searchTerm);       
  }
}
