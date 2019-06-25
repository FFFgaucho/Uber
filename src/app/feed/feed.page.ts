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
  public nome_usuario:string = "Felipe Freitas";
  
  public lista_filmes = new Array<any>();
  public lista_temp = new Array<any>();
  public i: number = 0;
  
  public searchTerm: string = "";
  public items: any;
  
  public obj: any;
  public result: any;

  constructor(
    private router: Router,
    private testProvider: MoooovieService) { }

  ngOnInit() { //código do que acontece na página quando chama 
    //this.setFilteredItems();
    //this.getFilmes();
    this.filtro();
  }

  setFilteredItems() {
    /*console.log(this.searchTerm);
    if(this.searchTerm==""){
      console.log("NUloooo");
      this.items = null;
    }
    else*/
      this.items = this.testProvider.filterItems(this.searchTerm);
      console.log("Valorrr");

  }/*
  //Funçãoes relativas à página
  feedSelect(){
    alert("ROdou");
  }
  //getFilmes(){ //inicializa o lista filme
  //  ); 
  //}*/
  filtro(){
    /*if(this.searchTerm==""){
      this.lista_filmes=this.lista_temp;
      this.i=this.i+1;
      console.log(this.i);
    }    
    else*/
    this.lista_filmes=this.testProvider.filterFilmes(this.searchTerm);  
      
  }
  
}
