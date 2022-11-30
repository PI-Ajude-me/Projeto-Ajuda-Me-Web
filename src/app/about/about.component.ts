import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  menuItems = [
    {
      label: 'Home',
      routerLink: ['/homepage'],
    },

    {
      label: 'Entrar',
      routerLink: ['/login'],
    },

    {
      label: 'Cadastrar',
      routerLink: ['/cadastro'],
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  activeState: boolean[] = [true, false, false];

  toggle(index: number) {
      this.activeState[index] = !this.activeState[index];
  }

}
