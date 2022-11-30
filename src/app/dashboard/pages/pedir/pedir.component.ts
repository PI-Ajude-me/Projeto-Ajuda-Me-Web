import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';

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
    this.messageService.add({key: 'tc', sticky: true, severity:'success', summary:'Login feito com sucesso!', detail:'Bem-vindo!'});
    let tokenpf = localStorage.getItem("pessoafisica");
    if (tokenpf != null){
      this.api.getPessoaPfByEmail(tokenpf).subscribe(re => {
        this.dataservice.setPessoaFisica(re);
        this.pessoafisica = this.dataservice.getPessoaFisica();
        this.nome = this.pessoafisica.nome;
      });
    }



  //   this.pessoafisica = this.dataservice.getPessoaFisica();
  //   this.pessoajuridica = this.dataservice.getPessoaJuridica();

  //   if (this.pessoafisica.nome !=null) {
  //     this.dataservice.setPessoaFisica(this.pessoafisica);
  //     this.pessoajuridica = this.dataservice.getPessoaJuridica();
  //     this.nome = this.pessoafisica.nome;
      
  //   } else if (this.pessoajuridica.nome != null) {
  //     this.nome = this.pessoajuridica.nome;
  //   }
   }

  sideBarOpen = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  value3!: string;

}
