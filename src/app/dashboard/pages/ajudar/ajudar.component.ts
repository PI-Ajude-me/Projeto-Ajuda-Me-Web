import { Component, OnInit } from '@angular/core';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajudar',
  templateUrl: './ajudar.component.html',
  styleUrls: ['./ajudar.component.scss']
})
export class AjudarComponent implements OnInit {

  pessoafisica: PessoaFisica = new PessoaFisica();

  pessoajuridica: PessoaJurica = new PessoaJurica();

  nome: any;

  selecionado1: string = "SAUDE";
  selecionado2: string = "ALIMENTAR";

  constructor(private dataservice: DataserviceService, private api: PessoaService) { }

  ngOnInit(): void {
    localStorage.removeItem("tipodoacao");
    let tokenpf = localStorage.getItem("pessoafisica");
    let tokenpj = localStorage.getItem("pessoajuridica");

    if (tokenpf != null) {
      this.api.getPessoaPfByEmail(tokenpf).subscribe(re => {
        this.dataservice.setPessoaFisica(re);
        this.pessoafisica = this.dataservice.getPessoaFisica();
        this.nome = this.pessoafisica.nome;
      });
    } else if (tokenpj != null) {
      this.api.getPessoaPjByEmail(tokenpj).subscribe(re => {
        this.dataservice.setPessoaJuridica(re);
        this.pessoajuridica = this.dataservice.getPessoaJuridica();
        this.nome = this.pessoajuridica.nome;
      });
    } else {
      Swal.fire("Erro ao carregar Do Usuario")
    }

  }

  sideBarOpen = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  alteraSelecionado(){
    localStorage.setItem("tipodoacao", this.selecionado1); 
  }

  alteraSelecionado2(){
    localStorage.setItem("tipodoacao", this.selecionado2); 
  }

}
