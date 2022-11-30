import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PessoaCategoria } from 'src/model/enums/pessoacategoria';
import { PessoaFisica, PessoaJurica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';
import { PessoaService } from 'src/service/pessoa.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  pessoafisica: PessoaFisica = new PessoaFisica();

  pessoajuridica: PessoaJurica = new PessoaJurica();

  //rota: string = '/login';

  menuItems: any;

  constructor(private dataservice: DataserviceService, private api: PessoaService) { }

  ngOnInit() {
    let tokenpf = localStorage.getItem("pessoafisica");
    let tokenpj = localStorage.getItem("pessoajuridica");

    if (tokenpf != null) {
      this.api.getPessoaPfByEmail(tokenpf).subscribe(re => {
        if (re.pessoacategoria === PessoaCategoria.DOADOR) {
          this.dataservice.setPessoaFisica(re);
          this.pessoafisica = this.dataservice.getPessoaFisica();
          this.menuItems = [
            {
              label: 'Sobre',
              routerLink: ['/about'],
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
              label: 'Sobre',
              routerLink: ['/about'],
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
              label: 'Sobre',
              routerLink: ['/about'],
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
              label: 'Sobre',
              routerLink: ['/about'],
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
              label: 'Sobre',
              routerLink: ['/about'],
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
              label: 'Sobre',
              routerLink: ['/about'],
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
          label: 'Sobre',
          routerLink: ['/about'],
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      960: {
        items: 1
      }
    },
    nav: true
  }
}