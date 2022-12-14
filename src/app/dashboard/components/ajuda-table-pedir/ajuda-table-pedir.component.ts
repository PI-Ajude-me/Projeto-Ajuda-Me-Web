import { DoacaoCategoria } from './../../../../model/enums/doacaocategoria';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doacao } from 'src/model/doacao';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { DoacaoService } from 'src/service/doacao.service';
import { PessoaService } from 'src/service/pessoa.service';
import { ApiServiceService } from '../../../../shared/api-service.service';
import { PessoaCategoria } from 'src/model/enums/pessoacategoria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajuda-table-pedir',
  templateUrl: './ajuda-table-pedir.component.html',
  styleUrls: ['./ajuda-table-pedir.component.scss']
})


export class AjudaTablePedirComponent implements OnInit {

  pessoafisica: PessoaFisica = new PessoaFisica();

  pessoajuridica: PessoaJurica = new PessoaJurica();

  doacao: Doacao = new Doacao();

  doacoes?: Doacao[];

  displayModal: boolean = false;

  opcoesajuda: any;

  selectedDoacao?: Doacao;

  doador:boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }

  showAddBtn: boolean = true;
  showUpdateBtn: boolean = false;


  constructor(private api: ApiServiceService, private dataservice: DataserviceService, private apiDoacao: DoacaoService, private apiPessoa: PessoaService) { }

  ngOnInit(): void {

    this.opcoesajuda = [
      { label: "SAUDE", value: 0 },
      { label: "ALIMENTAR", value: 1 },
      { label: "HABITACIONAL", value: 2 },
      { label: "VESTIMENTA", value: 3 },
      { label: "VETERINÁRIA", value: 4 },
      { label: "MÓVEIS", value: 5 },
      { label: "OUTROS", value: 6 },
    ];

    let tokenpf = localStorage.getItem("pessoafisica");
    let tokenpj = localStorage.getItem("pessoajuridica");
    let categoriadoacao = localStorage.getItem("tipodoacao");

    if (tokenpf != null) {
      this.apiPessoa.getPessoaPfByEmail(tokenpf).subscribe(re => {
        this.dataservice.setPessoaFisica(re);
        this.pessoafisica = this.dataservice.getPessoaFisica();
        this.doacao.fisica = this.pessoafisica;
        if (this.pessoafisica.pessoacategoria === PessoaCategoria.DOADOR) {       
          if(categoriadoacao !=null){
            this.apiDoacao.getDoacaoByDoacaoCategoria(categoriadoacao).subscribe(pf => {
              this.doacoes = pf;
            });
          }else{
            this.getAllDoacoes();
          }
        } else if (this.pessoafisica.pessoacategoria === PessoaCategoria.RECEBER_AJUDA) {
          this.doador = true;
          this.apiDoacao.getDoacaoByPessoaFisica(re.id).subscribe(pf => {
            this.doacoes = pf;
          });
        } else {
          this.getAllDoacoes();
        }
      });
    } else if (tokenpj != null) {
      this.apiPessoa.getPessoaPjByEmail(tokenpj).subscribe(re => {
        this.dataservice.setPessoaJuridica(re);
        this.pessoajuridica = this.dataservice.getPessoaJuridica();
        this.doacao.juridica = this.pessoajuridica;
        if(this.pessoajuridica.pessoacategoria=== PessoaCategoria.DOADOR){
          this.doador = true;
          if(categoriadoacao !=null){
            this.apiDoacao.getDoacaoByDoacaoCategoria(categoriadoacao).subscribe(pf => {
              this.doacoes = pf;
            });
          }else{
            this.getAllDoacoes();
          }
        }else if(this.pessoajuridica.pessoacategoria=== PessoaCategoria.RECEBER_AJUDA){
          this.doador = true;
          this.apiDoacao.getDoacaoByPessoaJuridica(re.id).subscribe(pf => {
            this.doacoes = pf;
          });
        }else{
          this.getAllDoacoes();
        }      
      });
    } else {
      Swal.fire("Erro ao carregar Do Usuario")
    }
  }

  getAllDoacoes() {
    this.apiDoacao.getDoacoes().subscribe(res => {
      this.doacoes = res;
    }, err => {
      console.log(err);
    })
  }

  getDoacoesPessoa() {
    this.apiDoacao.getDoacoes().subscribe(res => {
      this.doacoes = res;
    }, err => {
      console.log(err);
    })
  }

  onAddClick() {
    this.showAddBtn = true;
    this.showUpdateBtn = false;
  }

  deleteDoacao(doacao: Doacao) {
    this.apiDoacao.deleteDoacao(doacao).subscribe(res => {
      Swal.fire("Doação excluida com sucesso!");
      this.getAllDoacoes();
      this.locationreload();
    }, err => {
      console.log(err);
      Swal.fire(err.error.message);
    })
  }

  editDoacao(doacao: Doacao) {
    this.showAddBtn = false;
    this.showUpdateBtn = true;
    this.apiDoacao.getDoacaoById(doacao.id).subscribe(res => {
      this.doacao = res;
    });
  }

  updateAjudaDetails() {
    this.doacao.data = new Date;
    this.apiDoacao.updateDoacao(this.doacao).subscribe(res => {
      Swal.fire("Alteração feita com sucesso!");;
      let close = document.getElementById('close');
      close?.click();
      this.locationreload();
    }, err => {
      Swal.fire("Erro! Não foi possivel alterar");
    });
  }

  getTelefoneMask(): string {
    return '(00) 00000-0000';
  }

  getCepMask(): string {
    return '00000-000';
  }

  contato(contato: any) {
    return contato;
  }

  locationreload() {
    // To reload the entire page from the server
    location.reload();
  }
}
