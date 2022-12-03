import { DoacaoService } from './../../../../service/doacao.service';
import { Doacao } from './../../../../model/doacao';
import { Component, OnInit } from '@angular/core';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';

@Component({
  selector: 'app-pedir-form',
  templateUrl: './pedir-form.component.html',
  styleUrls: ['./pedir-form.component.scss']
})
export class PedirFormComponent implements OnInit {

  pessoafisica: PessoaFisica = new PessoaFisica();

  pessoajuridica: PessoaJurica = new PessoaJurica();

  doacao: Doacao = new Doacao();

  doacoes?: Doacao[];

  opcoesajuda: any;

  mensagem: string = "";

  testedata: boolean = true;

  constructor(private apiDoacao: DoacaoService, private dataservice: DataserviceService, private api: PessoaService,) { }

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

    // this.doacao.data = new Date;

    let tokenpf = localStorage.getItem("pessoafisica");
    let tokenpj = localStorage.getItem("pessoajuridica");

    if (tokenpf != null) {
      this.api.getPessoaPfByEmail(tokenpf).subscribe(re => {
        this.dataservice.setPessoaFisica(re);
        this.pessoafisica = this.dataservice.getPessoaFisica();
        this.doacao.fisica = this.pessoafisica;
        this.apiDoacao.getDoacaoByPessoaFisica(re.id).subscribe(pf => {
          pf.forEach(element => {
            this.intervaloDataValidator(element.data)
          });
        });
      });
    } else if (tokenpj != null) {
      this.api.getPessoaPjByEmail(tokenpj).subscribe(re => {
        this.dataservice.setPessoaJuridica(re);
        this.pessoajuridica = this.dataservice.getPessoaJuridica();
        this.doacao.juridica = this.pessoajuridica;
        this.apiDoacao.getDoacaoByPessoaJuridica(re.id).subscribe(pf => {
          pf.forEach(element => {
            this.intervaloDataValidator(element.data)
          });
        });
      });
    } else {
      alert("Erro ao carregar Do Usuario")
    }
  }

  displayModal: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }

  salvar() {
    if (this.validarCampos()) {
      if (this.testedata) {
        this.apiDoacao.saveDoacao(this.doacao).subscribe(res => {
          this.showModalDialog();
        }, err => {
          alert("Error");
        });
      } else {
        this.locationreload();
        alert("Só pode Uma Doação por Mês");
      }
    }
  }

  getTelefoneMask(): string {
    return '(00) 00000-0000';
  }

  validarCampos(): boolean {
    let resp: boolean = true;
    if (this.doacao.doacaocategoria == null) {
      this.mensagem = "Todos os Campos São Obrigatório! ";
      resp = false;
    } if (this.doacao.telefone == undefined) {
      this.mensagem = "Todos os Campos São Obrigatório! ";
      resp = false;
    } if (this.doacao.descricao == undefined) {
      this.mensagem = "Todos os Campos São Obrigatório! ";
      resp = false;
    }
    return resp;
  }

  locationreload() {
    // To reload the entire page from the server
    location.reload();
  }

  intervaloDataValidator(data: Date): boolean {
    let resp: boolean = false;
    const dataInicial = new Date(data);
    const dataFinal = new Date();
    const diferencaEmDias = (dataFinal.getTime() - dataInicial.getTime()) / (1000 * 60 * 60 * 24);

    if (diferencaEmDias < 30) {
      this.testedata = false;
      return resp = false;
    }
    return resp;
  }
}
