import { PessoaFisica, PessoaJurica } from './pessoa';
import { DoacaoCategoria } from './enums/doacaocategoria';

export class Doacao{
    id?: number;
    descricao?: string;
    data: Date = new Date();
    telefone?: string;
    cep?:string;
    bairro?:string;
    doacaocategoria?:DoacaoCategoria;
    fisica?:PessoaFisica;
    juridica?:PessoaJurica;

}