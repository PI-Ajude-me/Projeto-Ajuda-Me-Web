import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pedir',
  templateUrl: './pedir.component.html',
  styleUrls: ['./pedir.component.scss'],
  providers: [MessageService]
})


export class PedirComponent implements OnInit {

  pessoafisica: PessoaFisica = new PessoaFisica();

  pessoajuridica: PessoaJurica = new PessoaJurica();

  nome: any;

  constructor(private dataservice: DataserviceService, private api: PessoaService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.add({ key: 'tc', sticky: true, severity: 'success', summary: 'Login feito com sucesso!', detail: 'Bem-vindo!' });
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

  value3!: string;



}
