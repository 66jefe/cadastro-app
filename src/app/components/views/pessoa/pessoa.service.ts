import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Pessoa[]>{
    const url = `${this.baseUrl}/listar`;
    return this.http.get<Pessoa[]>(url);
  }

  findById(id: String): Observable<Pessoa> {
    const url = `${this.baseUrl}/listar/${id}`;
    return this.http.get<Pessoa>(url);
  }
  create(pessoa: Pessoa): Observable<Pessoa>{
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Pessoa>(url, pessoa);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/remover/${id}`;
    return this.http.delete<void>(url);
  }

  msg(str: String): void {
    this._snack.open(`${str}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

}
