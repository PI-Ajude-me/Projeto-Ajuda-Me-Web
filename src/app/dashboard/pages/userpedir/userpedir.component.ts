import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doacao } from 'src/model/doacao';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { DoacaoService } from 'src/service/doacao.service';
import { PessoaService } from 'src/service/pessoa.service';
import { ApiServiceService } from '../../../../shared/api-service.service';


@Component({
  selector: 'app-userpedir',
  templateUrl: './userpedir.component.html',
  styleUrls: ['./userpedir.component.scss'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
})
export class UserpedirComponent implements OnInit {

  sideBarOpen = false;

  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

  pessoafisica: PessoaFisica = new PessoaFisica();

  pessoajuridica: PessoaJurica = new PessoaJurica();

  doacao: Doacao = new Doacao();

  doacoes?: Doacao[];

  nome: any;


  constructor(private apiDoacao: DoacaoService, private dataservice: DataserviceService, private apiPessoa: PessoaService) { }

  ngOnInit(): void {
    let tokenpf = localStorage.getItem("pessoafisica");
    let tokenpj = localStorage.getItem("pessoajuridica");

    if (tokenpf != null) {
      this.apiPessoa.getPessoaPfByEmail(tokenpf).subscribe(re => {
        this.dataservice.setPessoaFisica(re);
        this.pessoafisica = this.dataservice.getPessoaFisica();
        this.doacao.fisica = this.pessoafisica;
        this.nome = this.pessoafisica.nome;
        // this.apiDoacao.getDoacaoByPessoaFisica(re.id).subscribe(pf => {
        //   this.doacoes = pf;
        // });
      });
    } else if (tokenpj != null) {
      this.apiPessoa.getPessoaPjByEmail(tokenpj).subscribe(re => {
        this.dataservice.setPessoaJuridica(re);
        this.pessoajuridica = this.dataservice.getPessoaJuridica();
        this.doacao.juridica = this.pessoajuridica;
        this.nome = this.pessoajuridica.nome;
        // this.apiDoacao.getDoacaoByPessoaJuridica(re.id).subscribe(pf => {
        //   this.doacoes = pf;
        // });
      });
    } else {
      alert("Erro ao carregar Do Usuario")
     // this.getAllDoacoes();
    }
  }
    
  }


