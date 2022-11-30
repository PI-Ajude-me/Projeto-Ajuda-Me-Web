import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  menuItems = [
    {
      label: 'Sobre',
      routerLink: ['/about'],
    },

    {
      label: 'Entrar',
      routerLink: ['/login'],
    },

    {
      label: 'Cadastrar',
      routerLink: ['/register'],
    }
  ];

  constructor() { }

  ngOnInit() {
   
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      /*
      400: {
        items: 2
      },
      740: {
        items: 3
      },*/
      960: {
        items: 1
      }
    },
    nav: true
  }

  

}