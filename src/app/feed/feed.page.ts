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
  
  public searchTerm: string = "";
  public items: any;
  
  public obj: any;
  public result: any;

  constructor(
    private router: Router,
    private testProvider: MoooovieService) { }

  ngOnInit() { //código do que acontece na página quando chama
    //this.feedselect();
    
    this.setFilteredItems();
    
    
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
  setFilteredItems() {
    this.items = this.testProvider.filterItems(this.searchTerm);
  }
  
  
  
  
  
  
  //Funçãoes relativas à página
  feedSelect(){
    alert("ROdou");
  }

/*

  getTopics(ev: any) {
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.lista_filmes.original_title = this.lista_filmes.filter((filme.original_title) => {
        return (filme.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }









  getAll() {
    this.testProvider.getLatestMovies()
      .subscribe(data => {
        this.obj = data;
        this.result = this.obj._embedded.episodes;
      });
  }
  loadListaFIlmes(){
    let loading = this._loadingCtrl.create({
      content: 'Aguarde o carregamento das peças de roupas...'
    });


  }
  filterItems(ev: any) {
    this.loadListaFilmes();
    let val = ev.target.value;

    console.log(this.pecasroupas);

    this.pecasroupas.filter(function(item) {
      return item.toLowerCase().includes(val.toLowerCase());   
    });
  }*/
}
