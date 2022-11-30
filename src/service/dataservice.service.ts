import { PessoaFisica, PessoaJurica } from './../model/pessoa';
import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  //private pessoaSourse = new Subject<PessoaFisica>();
 // currentPessoa = this.pessoaSourse.asObservable();

//const  = Object.freeze({});

  pessoafisica: PessoaFisica =Object.freeze({});
  pessoajuridica: PessoaJurica =Object.freeze({});
  constructor() { 

    let token = localStorage.getItem("pessoafisica");
  }

  setPessoaFisica(pessoafisica : PessoaFisica){
    this.pessoafisica = pessoafisica;
  }

  getPessoaFisica(){
   return this.pessoafisica;
  }

  setPessoaJuridica(pessoajuridica : PessoaJurica){
    this.pessoajuridica = pessoajuridica;
  }

  getPessoaJuridica(){
   return this.pessoajuridica;
  }


}
