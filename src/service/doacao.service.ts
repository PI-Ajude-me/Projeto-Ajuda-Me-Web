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
    return this.httpClient.get<Doacao[]>(`${environment.url}/doacoes`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getDoacoes2(): Observable<Doacao[]> {
    return this.httpClient.get<Doacao[]>(`${environment.baseUrl}/doacoes`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um Pessoa fisica pelo id
  getDoacaoById(id: any): Observable<Doacao> {
    return this.httpClient.get<Doacao>(`${environment.url}/doacoes/` + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um Pessoa
  saveDoacao(doacao: Doacao): Observable<Doacao> {
    console.log(doacao)
    return this.httpClient.post<Doacao>(`${environment.baseUrl}/doacoes/`, doacao)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // utualiza um Pessoa
  updateDoacao(doacao: Doacao): Observable<Doacao> {
    return this.httpClient.put<Doacao>(`${environment.url}/doacoes/` + '/' + doacao.id, doacao)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um Pessoa
  deleteDoacao(doacao: Doacao) {
    return this.httpClient.delete<Doacao>(`${environment.url}/doacoes/` + '/' + doacao.id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}