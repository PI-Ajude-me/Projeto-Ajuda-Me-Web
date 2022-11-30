import { Doacao } from './doacao';
import { PessoaCategoria } from "./enums/pessoacategoria";



export class Pessoa {
    id?: number;
    nome?: string;
    email?: string;
    telefone?: string;
    senha?: string;
    pessoacategoria?: PessoaCategoria;

}

export class PessoaJurica extends Pessoa {
    razaosocial?: string;
    cnpj?: string;
    doacoes? :Doacao[];
}

export class PessoaFisica extends Pessoa {
    cpf?: string;
    doacoes? :Doacao[];
}
