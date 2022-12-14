import { PessoaCategoria } from './../../model/enums/pessoacategoria';
import { DataserviceService } from './../../service/dataservice.service';
import { PessoaFisica, PessoaJurica } from './../../model/pessoa';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/login.service';
import { PessoaService } from 'src/service/pessoa.service';
import {MessageService} from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  login: string = "";
  senha: string = "";
  email: string = "";

  constructor(private router: Router, private loginService: LoginService, private api: PessoaService, private dataservice: DataserviceService,private messageService: MessageService) { }

  ngOnInit(): void {
   // this.showTopCenter()
  }

  showTopCenter() {
   // this.messageService.clear();
    this.messageService.add({key: 'tc', sticky: true, severity:'success', summary:'Login feito com sucesso!', detail:'Bem-vindo!'});
  }

  clear() {
    this.messageService.clear();
  }

  logar() {
    localStorage.removeItem("pi_ajuda_me_access_token");
    localStorage.removeItem("pessoafisica");
    localStorage.removeItem("pessoajuridica");
    localStorage.removeItem("tipodoacao");
    this.loginService.login(this.login.trim(), this.senha.trim()).subscribe(r => {
      let token = r.access_token;
      this.email = r.login;
      if (token != null&& r.tipo!) {
        localStorage.setItem("pi_ajuda_me_access_token", token);
        if (r.tipo === "cpf") {
          this.api.getPessoaPfByEmail(r.login).subscribe(re => {
            if (re.pessoacategoria === PessoaCategoria.DOADOR) {
              this.dataservice.setPessoaFisica(re);
              localStorage.setItem("pessoafisica", r.login); 
              this.showTopCenter();
              this.messageService.add({key: 'tc', sticky: true, severity:'success', summary:'Login feito com sucesso!', detail:'Bem-vindo!'});
              this.router.navigate(['/ajudar']);
              Swal.fire("Bem vindo ao Ajuda-Me!");
            } else if (re.pessoacategoria === PessoaCategoria.RECEBER_AJUDA) {
              this.dataservice.setPessoaFisica(re);
              localStorage.setItem("pessoafisica", r.login);
              this.showTopCenter();
              this.messageService.add({key: 'tc', sticky: true, severity:'success', summary:'Login feito com sucesso!', detail:'Bem-vindo!'});
              this.router.navigate(['/pedir']);
              Swal.fire("Bem vindo ao Ajuda-Me!");
            }
          });
        }
        if (r.tipo === "cnpj") {
          this.api.getPessoaPjByEmail(this.email).subscribe(re => {
            if (re.pessoacategoria === PessoaCategoria.DOADOR) {
              this.dataservice.setPessoaJuridica(re);
              localStorage.setItem("pessoajuridica", r.login);
              this.showTopCenter();
              this.router.navigate(['ajudar']);
              Swal.fire("Bem vindo ao Ajuda-Me!");
            } else if (re.pessoacategoria === PessoaCategoria.RECEBER_AJUDA) {
              this.dataservice.setPessoaJuridica(re);
              localStorage.setItem("pessoajuridica", r.login);
              this.showTopCenter();
              this.router.navigate(['/pedir']);
              Swal.fire("Bem vindo ao Ajuda-Me!");
            } else {
              this.router.navigate(['/dashboard']);
            }
          });
        }
      } else {
        Swal.fire("Usuario não encontrado");
      }
    });
  }
}
