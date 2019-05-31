import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoovieService } from '../moovie.service'; //provê o serviço de consumo de dados

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [MoovieService]
})
export class FeedPage implements OnInit {
  public nome_usuario:string = "Felipe Freitas";

  constructor(private router: Router,
    private prove_filme:MoovieService
    ) { }

  ngOnInit() { //código do que acontece na página quando chama
    this.feedselect();
  }

  //Funçãoes relativas à página
  feedselect(){
    alert("ROdou");
  }
  go() {
    this.prove_filme.getLatestMovies()._subscribe(
      data =>{
        console.log(data);
      },
      error =>{
          console.log(error);
      }
    )
  }
  
}
