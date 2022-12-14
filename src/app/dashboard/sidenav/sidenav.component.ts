import { Component, OnInit } from '@angular/core';
import { PessoaCategoria } from 'src/model/enums/pessoacategoria';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  pessoafisica: PessoaFisica = new PessoaFisica();
  pessoajuridica: PessoaJurica = new PessoaJurica();
  ajuda:boolean = false;
  pedir:boolean = false;
  admin:boolean = false;
  userpedir:boolean = false;
  router: any;

  constructor(private api: PessoaService, private dataservice: DataserviceService) { }

  ngOnInit(): void {
    let tokenpf = localStorage.getItem("pessoafisica");
    let tokenpj = localStorage.getItem("pessoajuridica");

    if (tokenpf != null) {
      this.api.getPessoaPfByEmail(tokenpf).subscribe(re => {
        this.dataservice.setPessoaFisica(re);
        this.pessoafisica = this.dataservice.getPessoaFisica();
        if(this.pessoafisica.pessoacategoria=== PessoaCategoria.DOADOR){
          //this.router.navigate(['/ajudar']);
          this.ajuda = true;
          this.userpedir = true;
        //  return true;
        }else if(this.pessoafisica.pessoacategoria=== PessoaCategoria.RECEBER_AJUDA){
          //this.router.navigate(['/pedir']);
         // return true;
         this.pedir = true;
        }else{
        // return false;
        }
      });
    } else if (tokenpj != null) {
      this.api.getPessoaPjByEmail(tokenpj).subscribe(re => {
        this.dataservice.setPessoaJuridica(re);
        this.pessoajuridica = this.dataservice.getPessoaJuridica();
        if(this.pessoajuridica.pessoacategoria=== PessoaCategoria.DOADOR){
          //this.router.navigate(['/ajudar']);
          this.ajuda = true;
         // return true;
        }else if(this.pessoajuridica.pessoacategoria=== PessoaCategoria.RECEBER_AJUDA){
         // this.router.navigate(['/pedir']);
          //return true;
          this.pedir = true;
        }else{
          ///return false;
        }
      });
    } else {
      Swal.fire("Erro ao carregar Do Usuario")
    }
  }

  gfg: any;

  sair() {
    localStorage.removeItem("pi_ajuda_me_access_token");
    localStorage.removeItem("pessoafisica");
    localStorage.removeItem("pessoajuridica");
    localStorage.removeItem("tipodoacao");
    this.router.navigate(['homepage']);
  }

}
