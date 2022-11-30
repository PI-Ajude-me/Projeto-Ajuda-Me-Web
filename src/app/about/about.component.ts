import { Component, OnInit } from '@angular/core';
import { PessoaCategoria } from 'src/model/enums/pessoacategoria';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  pessoafisica: PessoaFisica = new PessoaFisica();

  pessoajuridica: PessoaJurica = new PessoaJurica();

  menuItems: any;

  // menuItems = [


  //   {
  //     label: 'Entrar',
  //     routerLink: ['/login'],
  //   },

  //   {
  //     label: 'Cadastrar',
  //     routerLink: ['/register'],
  //   }
  // ];


  constructor(private dataservice: DataserviceService, private api: PessoaService) { }

  ngOnInit(): void {
    let tokenpf = localStorage.getItem("pessoafisica");
    let tokenpj = localStorage.getItem("pessoajuridica");

    if (tokenpf != null) {
      this.api.getPessoaPfByEmail(tokenpf).subscribe(re => {
        if (re.pessoacategoria === PessoaCategoria.DOADOR) {
          this.dataservice.setPessoaFisica(re);
          this.pessoafisica = this.dataservice.getPessoaFisica();
          this.menuItems = [
            {
              label: 'Home',
              routerLink: ['/homepage'],
            },
            {
              label: 'Entrar',
              routerLink: ['/ajudar'],
            },
            {
              label: 'Cadastrar',
              routerLink: ['/register'],
            },
          ];
        } else if (re.pessoacategoria === PessoaCategoria.RECEBER_AJUDA) {
          this.dataservice.setPessoaFisica(re);
          this.pessoafisica = this.dataservice.getPessoaFisica();
          this.menuItems = [
            {
              label: 'Home',
              routerLink: ['/homepage'],
            },
            {
              label: 'Entrar',
              routerLink: ['/pedir'],
            },
            {
              label: 'Cadastrar',
              routerLink: ['/register'],
            },
          ];
        } else {
          this.menuItems = [
            {
              label: 'Home',
              routerLink: ['/homepage'],
            },
            {
              label: 'Entrar',
              routerLink: ['/login'],
            },
            {
              label: 'Cadastrar',
              routerLink: ['/register'],
            },
          ];
        }
      });
    } else if (tokenpj != null) {
      this.api.getPessoaPjByEmail(tokenpj).subscribe(re => {
        if (re.pessoacategoria === PessoaCategoria.DOADOR) {
          this.dataservice.setPessoaJuridica(re);
          this.pessoajuridica = this.dataservice.getPessoaJuridica();
          this.menuItems = [
            {
              label: 'Home',
              routerLink: ['/homepage'],
            },
            {
              label: 'Entrar',
              routerLink: ['/ajudar'],
            },
            {
              label: 'Cadastrar',
              routerLink: ['/register'],
            },
          ];
        } else if (re.pessoacategoria === PessoaCategoria.RECEBER_AJUDA) {
          this.dataservice.setPessoaJuridica(re);
          this.pessoajuridica = this.dataservice.getPessoaJuridica();
          this.menuItems = [
            {
              label: 'Home',
              routerLink: ['/homepage'],
            },
            {
              label: 'Entrar',
              routerLink: ['/pedir'],
            },
            {
              label: 'Cadastrar',
              routerLink: ['/register'],
            },
          ];
        } else {
          this.menuItems = [
            {
              label: 'Home',
              routerLink: ['/homepage'],
            },
            {
              label: 'Entrar',
              routerLink: ['/login'],
            },
            {
              label: 'Cadastrar',
              routerLink: ['/register'],
            },
          ];
        }
      });
    } else {
      this.menuItems = [
        {
          label: 'Home',
          routerLink: ['/homepage'],
        },
        {
          label: 'Entrar',
          routerLink: ['/login'],
        },
        {
          label: 'Cadastrar',
          routerLink: ['/register'],
        },
      ];
    }
  }

  activeState: boolean[] = [true, false, false];

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

}
