import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'ajude-me';
  nome = '';
  cpf = '';
  email = '';
  senha = '';

 opcaocadastro = [
    { opcoescadastro: "Ajudar" },
    { opcoescadastro: "Pedir Ajuda" },
  ];


}