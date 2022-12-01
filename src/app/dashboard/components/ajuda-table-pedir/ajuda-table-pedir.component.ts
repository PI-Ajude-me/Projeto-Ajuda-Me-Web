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

  showModalDialog() {
    this.displayModal = true;
  }

  ajudaForm!: FormGroup;
  ajudaModel: any;
  ajudaDetails: any;
  showAddBtn: boolean = true;
  showUpdateBtn: boolean = false;


  constructor(private api: ApiServiceService, private fb: FormBuilder, private dataservice: DataserviceService, private apiDoacao: DoacaoService, private apiPessoa: PessoaService) { }

  ngOnInit(): void {
    this.createAjudaForm();
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

  createAjudaForm() {
    this.ajudaForm = this.fb.group({
      id: [''],
      usuario: [''],
      descricao: [''],
      contato: [''],
      data: []
    })
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

  postAjudaDetails() {
    this.ajudaModel = Object.assign({}, this.ajudaForm.value);

    this.api.postAjuda(this.ajudaModel).subscribe(res => {
      alert("Ajuda cadastrada com sucesso!");
      let close = document.getElementById('close');
      close?.click();
      this.ajudaForm.reset();
      this.getAllDoacoes();
    }, err => {
      alert("Error");
    })
  }

  deleteAjudaDetail(id: any) {
    this.api.deleteAjuda(id).subscribe(res => {
      alert("Ajuda excluida com sucesso!");
      this.getAllDoacoes();
    }, err => {
      alert("Falha ao excluir ajuda");
    })
  }

  edit(ajuda: any) {
    this.showAddBtn = false;
    this.showUpdateBtn = true;
    this.ajudaForm.controls['id'].setValue(ajuda.id);
    this.ajudaForm.controls['usuario'].setValue(ajuda.usuario);
    this.ajudaForm.controls['descricao'].setValue(ajuda.descricao);
    this.ajudaForm.controls['contato'].setValue(ajuda.contato);
    this.ajudaForm.controls['data'].setValue(ajuda.data);
  }

  updateAjudaDetails() {
    this.ajudaModel = Object.assign({}, this.ajudaForm.value);
    this.api.updateAjuda(this.ajudaModel, this.ajudaModel.id).subscribe(res => {
      alert("Alteração feita com sucesso!");
      let close = document.getElementById('close');
      close?.click();
      this.getAllDoacoes();
      this.ajudaForm.reset();
      this.ajudaModel = {};
    }, err => {
      alert("Erro! Não foi possivel alterar");
    })
  }

  reset() {
    this.ajudaForm.reset();
    this.ajudaModel = {};
  }

  getTelefoneMask(): string {
    return '(00) 00000-0000';
  }

  contato(contato: any) {
    return contato;
  }

}
