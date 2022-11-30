import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { PessoaCategoria } from 'src/model/enums/pessoacategoria';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';


@Injectable()
export class AuthGuardServicePedirAjudar implements CanActivate {

  pessoafisica: PessoaFisica = new PessoaFisica();
  pessoajuridica: PessoaJurica = new PessoaJurica();
  nome: any;

  constructor(public router: Router,private dataservice: DataserviceService, private api: PessoaService) { }

  canActivate(): boolean {
    let tokenpf = localStorage.getItem("pessoafisica");
    let tokenpj = localStorage.getItem("pessoajuridica");

    if (tokenpf != null) {
      this.api.getPessoaPfByEmail(tokenpf).subscribe(re => {
        this.dataservice.setPessoaFisica(re);
        this.pessoafisica = this.dataservice.getPessoaFisica();
        if(this.pessoafisica.pessoacategoria=== PessoaCategoria.DOADOR){
          this.router.navigate(['/ajudar']);
          return true;
        }else if(this.pessoafisica.pessoacategoria=== PessoaCategoria.RECEBER_AJUDA){
          this.router.navigate(['/pedir']);
          return true;
        }else{
          return false;
        }
      });
    } else if (tokenpj != null) {
      this.api.getPessoaPjByEmail(tokenpj).subscribe(re => {
        this.dataservice.setPessoaJuridica(re);
        this.pessoajuridica = this.dataservice.getPessoaJuridica();
        if(this.pessoajuridica.pessoacategoria=== PessoaCategoria.DOADOR){
          this.router.navigate(['/ajudar']);
          return true;
        }else if(this.pessoajuridica.pessoacategoria=== PessoaCategoria.RECEBER_AJUDA){
          this.router.navigate(['/pedir']);
          return true;
        }else{
          return false;
        }
      });
    } else {
      alert("Erro ao carregar Do Usuario")
    }
    return false;
  }
}