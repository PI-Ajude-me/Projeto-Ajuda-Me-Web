import { PessoaFisica, PessoaJurica } from './../../../model/pessoa';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  pessoafisica: PessoaFisica = new PessoaFisica();
  pessoajuridica: PessoaJurica = new PessoaJurica();
  nome: any;

  constructor(public router: Router, private dataservice: DataserviceService, private api: PessoaService) {
  }

  ngOnInit(): void {
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
      alert("Erro ao carregar Do Usuario")
    }
  }

  sair() {
    localStorage.removeItem("pi_ajuda_me_access_token");
    localStorage.removeItem("pessoafisica");
    localStorage.removeItem("pessoajuridica");
    localStorage.removeItem("tipodoacao");
    this.router.navigate(['homepage']);
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
