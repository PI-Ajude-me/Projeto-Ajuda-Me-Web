import { PessoaJurica } from './../../model/pessoa';
import { PessoaFisica } from '../../model/pessoa';
import { PessoaService } from '../../service/pessoa.service';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { CpfCnpjValidator } from 'src/shared/cpf-cnpj.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

  pessoaForm!: FormGroup;

  pessoasfisicas!: PessoaFisica[];

  opcoes: any[];

  tipodecadastro:string = 'CPF';

  constructor(private api: PessoaService, private fb: FormBuilder,private router: Router) {
    this.opcoes = [
      { label: "DOADOR", value: 0 },
      { label: "PEDIR AJUDA", value: 1 }
    ];

  }

  ngOnInit(): void {
    this.pessoaForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
      telefone: new FormControl('', [Validators.required]),
      senha: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      pessoacategoria: new FormControl('', [Validators.required]),
      razaosocial: new FormControl('',),

    })

  }

  get nome() {
    return this.pessoaForm.get('nome')!;
  }
  get cpf() {
    return this.pessoaForm.get('cpf')!;
  }
  get razaosocial() {
    return this.pessoaForm.get('razaosocial')!;
  }
  get email() {
    return this.pessoaForm.get('email')!;
  }
  get telefone() {
    return this.pessoaForm.get('telefone')!;
  }
  get senha() {
    return this.pessoaForm.get('senha')!;
  }
  get pessoacategoria() {
    return this.pessoaForm.get('pessoacategoria')!;
  }

  getAllpessoasFisicas() {
    this.api.getPessoas().subscribe(res => {
      this.pessoasfisicas = res;
    }, err => {
      console.log(err);

    })
  }

  postPessoaForm() {
    
    if(this.tipodecadastro === 'CPF'){
      let pessoaFisica:PessoaFisica = new PessoaFisica();
      pessoaFisica.nome = this.nome.value;
      pessoaFisica.cpf = this.cpf.value;
      pessoaFisica.telefone = this.telefone.value;
      pessoaFisica.email = this.email.value;
      pessoaFisica.senha = this.senha.value;
      pessoaFisica.pessoacategoria = this.pessoacategoria.value;

      this.api.savePessoaPf(pessoaFisica).subscribe(res => {
        this.pessoaForm.reset();
        alert("Cadastro PF Realizado Com Sucesso!");
        this.router.navigate(['/login']);
      }, err => {
        alert("Error");
      })
    }

    if(this.tipodecadastro === 'CNPJ'){
      let pessoaJuridica:PessoaJurica = new PessoaJurica();
      pessoaJuridica.nome = this.nome.value;
      pessoaJuridica.razaosocial = this.razaosocial.value;
      pessoaJuridica.cnpj = this.cpf.value;
      pessoaJuridica.telefone = this.telefone.value;
      pessoaJuridica.email = this.email.value;
      pessoaJuridica.senha = this.senha.value;
      pessoaJuridica.pessoacategoria = this.pessoacategoria.value;

      this.api.savePessoaPj(pessoaJuridica).subscribe(res => {
        this.pessoaForm.reset();
        alert("Cadastro PJ Realizado Com Sucesso!");
        this.router.navigate(['/login']);
      }, err => {
        alert("Error");
      })
    }  
  }


  isCPF(): boolean {
    return this.cpf.value == null ? true : this.cpf.value.length < 12 ? true : false;
  }

  getCpfCnpjMask(): string {
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  }

  getTelefoneMask(): string {
    return '(00) 00000-0000';
  }

}



 // opcoesTipoCpfCpnj: any[];

  //@Input() TipoPessoas: any[] | undefined;
 //isShown: boolean = false;
 // isShown2!: boolean;
 // cn!: any[] ;

        // let close = document.getElementById('close');
       // close?.click();
        // this.getAllpessoasFisicas();

               // let close = document.getElementById('close');
       // close?.click();
        // this.getAllpessoasFisicas();

         //  PessoaFisica = Object.assign({}, this.pessoaForm.value);

           // get tipodecadastro() {
  //  return this.radioForm.get('tipodecadastro')!;
  // }

  //  radioChange() {
  //  console.log(this.opcoesTipoCpfCpnj)

 // }

 // createPessoaForm() {
   // this.radioForm = this.fb.group({
  //    tipodecadastro: ['']
 // }

 // getTipoCpfCnpj(): { valor: string; desc: string; }[] {
   // return this.cn =[
   //   { valor: 'cpf', desc: 'CPF' },
   //   { valor: 'cnpj', desc: 'CNPJ' }
    //];
 // }

 

    // this.pessoaForm = this.fb.group({

    // });
    // this.getAllpessoasFisicas();
    //this.createPessoaForm();

       // this.opcoesTipoCpfCpnj = this.getTipoCpfCnpj();

    //console.log(this.tipodecadastro.value)
    //this.cn = Object.assign({}, this.radioForm.value);

    //console.log(this.cn)
    //console.log(this.cn)
  
    
   // console.log(this.nome.value)

 // toggleShow(){
   // this.isShown = !this.isShown;
   // this.tipodecadastro = false;
 // }

  //radioForm!: FormGroup;

  //Comentários que foram movidos anteriormente: 

  // this.pessoaForm = this.fb.group({

  // });

    /*
  changeGender(e: any) {
    this.tipodecadastro = e;
    console.log(this.tipodecadastro);
    console.log(e.target);

  } */