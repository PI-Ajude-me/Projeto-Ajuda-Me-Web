import { PessoaFisica, PessoaJurica } from './pessoa';
import { DoacaoCategoria } from './enums/doacaocategoria';

export class Doacao{
    id?: number;
    descricao?: string;
    data: Date = new Date();
    telefone?: string;
    doacaocategoria?:DoacaoCategoria;
    fisica?:PessoaFisica;
    juridica?:PessoaJurica;

}