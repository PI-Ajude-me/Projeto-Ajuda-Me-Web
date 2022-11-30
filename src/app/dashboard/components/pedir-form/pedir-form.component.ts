import { DoacaoService } from './../../../../service/doacao.service';
import { Doacao } from './../../../../model/doacao';
import { Component, OnInit } from '@angular/core';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';

@Component({
  selector: 'app-pedir-form',
  templateUrl: './pedir-form.component.html',
  styleUrls: ['./pedir-form.component.scss']
})
export class PedirFormComponent implements OnInit {

  pessoafisica: PessoaFisica = new PessoaFisica();

  pessoajuridica: PessoaJurica = new PessoaJurica();

  doacao: Doacao = new Doacao();


  opcoesajuda: any;


  constructor(private apiDoacao: DoacaoService) { }

  ngOnInit(): void {
    this.opcoesajuda = [
      { opcao: "Saúde", value: 0 },
      { opcao: "Alimentar", value: 1 },
      { opcao: "Habitacional", value: 2 },
      { opcao: "Vestimenta", value: 3 },
      { opcao: "Veterinária", value: 4 },
      { opcao: "Móveis", value: 5 },
      { opcao: "Outros", value: 6 },
    ];
    this.doacao.data = new Date;
  }

  displayModal: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }

  salvar(){
    this.apiDoacao.saveDoacao(this.doacao).subscribe(res => {
      alert("Cadastro de Doacao Realizado Com Sucesso!");
      this.showModalDialog();
    }, err => {
      alert("Error");
    })
  }
}
