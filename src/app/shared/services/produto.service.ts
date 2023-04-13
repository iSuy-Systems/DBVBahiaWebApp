import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Fornecedor } from '../models/fornecedor/Fornecedor';
import { Produto } from '../models/produto/Produto';
import { BaseService } from 'src/app/base/base.service';

@Injectable()
export class ProdutoService extends BaseService {
  constructor(private http: HttpClient) { super() }

  obterTodos(): Observable<Produto[]> {
    return this.http
      .get<Produto[]>(this.UrlServiceV1 + "produtos", super.ObterAuthHeaderJson())
      .pipe(
        catchError(this.serviceError));
  }

  getProduct(productId: string): Observable<Produto> {
    return this.http
      .get<Produto>(this.UrlServiceV1 + `produtos/${productId}`, super.ObterAuthHeaderJson())
      .pipe(
        catchError(this.serviceError));
  }

  deleteProduct(productId: string): Observable<Produto> {
    return this.http
      .delete<Produto>(this.UrlServiceV1 + `produtos/${productId}`, super.ObterAuthHeaderJson())
      .pipe(
        catchError(this.serviceError));
  }

  updateProduct(product: Produto): Observable<Produto> {
    return this.http
      .put<Produto>(this.UrlServiceV1 + `produtos/${product.id}`, product, super.ObterAuthHeaderJson())
      .pipe(
        catchError(this.serviceError));
  }

  registrarProdutoAlternativo(produto: FormData): Observable<Produto> {

    return this.http
      .post(this.UrlServiceV1 + 'produtos/adicionar', produto, super.ObterHeaderFormData())
      .pipe(
        map(super.extractData),
        catchError(super.serviceError)
      );
  }

  registrarProduto(produto: Produto): Observable<Produto> {

    return this.http
      .post(this.UrlServiceV1 + 'produtos', produto, super.ObterAuthHeaderJson())
      .pipe(
        map(super.extractData),
        catchError(super.serviceError)
      );
  }

  obterFornecedores(): Observable<Fornecedor[]> {
    return this.http
      .get<Fornecedor[]>(this.UrlServiceV1 + 'fornecedores', super.ObterAuthHeaderJson())
      .pipe(
        catchError(super.serviceError)
      );
  }
}
