import { PessoaJurica } from './../model/pessoa';
import { PessoaFisica } from '../model/pessoa';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Obtem todas as Pessoas
  getPessoas(): Observable<PessoaFisica[]> {
    return this.httpClient.get<PessoaFisica[]>(`${environment.url}/pessoafisica`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um Pessoa fisica pelo id
  getPessoaPfById(id: any): Observable<PessoaFisica> {
    return this.httpClient.get<PessoaFisica>(`${environment.url}/pessoafisica/` + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

    // Obtem um Pessoa juridica pelo id
    getPessoaPjById(id: any): Observable<PessoaJurica> {
      return this.httpClient.get<PessoaJurica>(`${environment.url}/pessoajuridica/` + id)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

  // Obtem um Pessoa fisica pelo email
  getPessoaPfByEmail(email: any): Observable<PessoaFisica> {
    return this.httpClient.get<PessoaFisica>(`${environment.url}/pessoafisica/email/` + email)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Obtem um Pessoa juridica pelo id
  getPessoaPjByEmail(email: String): Observable<PessoaJurica> {
    return this.httpClient.get<PessoaJurica>(`${environment.url}/pessoajuridica/email/` + email)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um Pessoa
  savePessoaPf(pessoafisica: PessoaFisica): Observable<PessoaFisica> {
    return this.httpClient.post<PessoaFisica>(`${environment.url}/pessoafisica/criar/`, pessoafisica)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  savePessoaPf2(pessoafisica: PessoaFisica): Observable<PessoaFisica> {
    return this.httpClient.post<PessoaFisica>(`${environment.baseUrl}/pessoafisica/`, pessoafisica)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  savePessoaPj(pessoajuridica: PessoaJurica): Observable<PessoaJurica> {
    return this.httpClient.post<PessoaJurica>(`${environment.url}/pessoajuridica/criar/`, pessoajuridica)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um Pessoa
  updatePessoa(pessoafisica: PessoaFisica): Observable<PessoaFisica> {
    return this.httpClient.put<PessoaFisica>(`${environment.url}/pessoafisica/` + '/' + pessoafisica.id, pessoafisica)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um Pessoa
  deletePessoa(pessoafisica: PessoaFisica) {
    return this.httpClient.delete<PessoaFisica>(`${environment.url}/pessoafisica/` + '/' + pessoafisica.id)
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