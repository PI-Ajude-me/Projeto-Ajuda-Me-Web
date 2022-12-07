import { Doacao } from './../model/doacao';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  constructor(private httpClient: HttpClient) { }

  // Obtem todas as Pessoas
  getDoacoes(): Observable<Doacao[]> {
    return this.httpClient.get<Doacao[]>(`${environment.url}/doacoes`);
  }

  // Obtem um Pessoa fisica pelo id
  getDoacaoById(id: any): Observable<Doacao> {
    return this.httpClient.get<Doacao>(`${environment.url}/doacoes/` + id);
  }

  getDoacaoByPessoaFisica(id: any): Observable<Doacao[]> {
    return this.httpClient.get<Doacao[]>(`${environment.url}/doacoes/doacaobypessoafisica/` + id);
  }

  getDoacaoByPessoaJuridica(id: any): Observable<Doacao[]> {
    return this.httpClient.get<Doacao[]>(`${environment.url}/doacoes/doacaobypessoajuridica/` + id);
  }

  getDoacaoByDoacaoCategoria(categoria: any): Observable<Doacao[]> {
    return this.httpClient.get<Doacao[]>(`${environment.url}/doacoes/doacaobydoacaocategoria/${categoria}`);
  }

  // salva um Pessoa
  saveDoacao(doacao: Doacao): Observable<Doacao> {
    return this.httpClient.post<Doacao>(`${environment.url}/doacoes/`, doacao);
  }


  // utualiza um Pessoa
  updateDoacao(doacao: Doacao): Observable<Doacao> {
    return this.httpClient.put<Doacao>(`${environment.url}/doacoes/`+ doacao.id, doacao);
  }

  // deleta um Pessoa
  deleteDoacao(doacao: Doacao) {
    return this.httpClient.delete<Doacao>(`${environment.url}/doacoes/${doacao.id}`);
      
  }

}