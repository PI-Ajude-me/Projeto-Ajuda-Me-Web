import { DoacaoCategoria } from './../../../../model/enums/doacaocategoria';
import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doacao } from 'src/model/doacao';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { DoacaoService } from 'src/service/doacao.service';
import { PessoaService } from 'src/service/pessoa.service';
import { ApiServiceService } from '../../../../shared/api-service.service';

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

  showModalDialog() {
    this.displayModal = true;
  }

  //ajudaForm!: FormGroup;
  //ajudaModel: any;
 // ajudaDetails: any;
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

    if (tokenpf != null) {
      this.apiPessoa.getPessoaPfByEmail(tokenpf).subscribe(re => {
        this.dataservice.setPessoaFisica(re);
        this.pessoafisica = this.dataservice.getPessoaFisica();
        this.doacao.fisica = this.pessoafisica;
        this.apiDoacao.getDoacaoByPessoaFisica(re.id).subscribe(pf => {
          this.doacoes = pf;
        });
      });
    } else if (tokenpj != null) {
      this.apiPessoa.getPessoaPjByEmail(tokenpj).subscribe(re => {
        this.dataservice.setPessoaJuridica(re);
        this.pessoajuridica = this.dataservice.getPessoaJuridica();
        this.doacao.juridica = this.pessoajuridica;
        this.apiDoacao.getDoacaoByPessoaJuridica(re.id).subscribe(pf => {
          this.doacoes = pf;
        });
      });
    } else {
      alert("Erro ao carregar Do Usuario")
      this.getAllDoacoes();
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

  // postDoacaoDetails() {
  //   this.ajudaModel = Object.assign({}, this.ajudaForm.value);
  //   this.api.postAjuda(this.ajudaModel).subscribe(res => {
  //     alert("Ajuda cadastrada com sucesso!");
  //     let close = document.getElementById('close');
  //     close?.click();
  //     this.ajudaForm.reset();
  //     this.getAllDoacoes();
  //   }, err => {
  //     alert("Error");
  //   })
  // }

  deleteDoacao(doacao: Doacao) {
    this.apiDoacao.deleteDoacao(doacao).subscribe(res => {
      alert("Doação excluida com sucesso!");
      this.getAllDoacoes();
    }, err => {
      alert("Falha ao excluir Doação");
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
      alert("Alteração feita com sucesso!");
     // this.getAllDoacoes();
      let close = document.getElementById('close');
      close?.click();
      this.locationreload();
    }, err => {
      alert("Erro! Não foi possivel alterar");
    });
  }

  getTelefoneMask(): string {
    return '(00) 00000-0000';
  }

  contato(contato: any) {
    return contato;
  }

  locationreload() {
    // To reload the entire page from the server
    location.reload();
  }
}
