import { Component, OnInit } from '@angular/core';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';

@Component({
  selector: 'app-ajudar',
  templateUrl: './ajudar.component.html',
  styleUrls: ['./ajudar.component.scss']
})
export class AjudarComponent implements OnInit {

  pessoafisica: PessoaFisica = new PessoaFisica();

  pessoajuridica: PessoaJurica = new PessoaJurica();

  nome: any;

  constructor(private dataservice: DataserviceService, private api: PessoaService) { }

  ngOnInit(): void {

    let tokenpf = localStorage.getItem("pessoafisica");
    if (tokenpf != null) {
      this.api.getPessoaPfByEmail(tokenpf).subscribe(re => {
        this.dataservice.setPessoaFisica(re);
        this.pessoafisica = this.dataservice.getPessoaFisica();
        this.nome = this.pessoafisica.nome;
      });
    }

    // this.pessoafisica = this.dataservice.getPessoaFisica();
    // this.pessoajuridica = this.dataservice.getPessoaJuridica();

    // if (this.pessoafisica.nome != null) {
    //   this.nome = this.pessoafisica.nome;
    // } else if (this.pessoajuridica.nome != null) {
    //   this.nome = this.pessoajuridica.nome;
    // }
  }

  sideBarOpen = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
