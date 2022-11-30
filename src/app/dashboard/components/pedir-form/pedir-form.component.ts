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
      { label: "SAÚDE", value: 0 },
      { label: "ALIMENTAR", value: 1 },
      { label: "HABITACIONAL", value: 2 },
      { label: "VESTIMENTA", value: 3 },
      { label: "VETERINÁRIA", value: 4 },
      { label: "MÓVEIS", value: 5 },
      { label: "OUTROS", value: 6 },
    ];
    this.doacao.data = new Date;
  }

  displayModal: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }

  salvar() {
    this.apiDoacao.saveDoacao(this.doacao).subscribe(res => {
      this.showModalDialog();

    }, err => {
      alert("Error");
    })
  }

  getTelefoneMask(): string {
    return '(00) 00000-0000';
  }


  locationreload() {
    // To reload the entire page from the server
    location.reload();
  }
}
