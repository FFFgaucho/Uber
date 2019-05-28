import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario:string = "Felipe Freitas";

  constructor(private router: Router) { }

  ngOnInit() { //código do que acontece na página quando chama
    this.feedselect();
  }

  //Funçãoes relativas à página
  feedselect(){
    alert("ROdou");
  }
  go() {
    this.router.navigateByUrl('/animals');
  }
}
