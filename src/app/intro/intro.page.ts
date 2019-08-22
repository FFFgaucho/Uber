import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})

export class IntroPage implements OnInit {
  public nome_usuario:string = "Felipe Freitas";
  ngOnInit() {
    console.log(this.nome_usuario);
  }
  
  constructor(private router: Router) {

  }
  

  go() {
    console.log("aaaaaa");
   // alert("Go");
    this.router.navigate(['/feed']);
  }
}
