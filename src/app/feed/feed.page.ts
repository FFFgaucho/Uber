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

  constructor(
    private router: Router,
    private testProvider: MoooovieService) { }

  ngOnInit() { //código do que acontece na página quando chama
    this.feedselect();
    this.testProvider.getLatestMovies().subscribe(
        data=>{
          console.log(data);
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
  go() {
    this.router.navigateByUrl('/animals');
  }
}
