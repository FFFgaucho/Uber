import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario:string = "Felipe Freitas";

  constructor() { }

  ngOnInit() { //código do que acontece na página
    this.feedselect();
  }

  //Funçãoes relativas à página
  feedselect(){
    alert("ROdou");
  }
}
