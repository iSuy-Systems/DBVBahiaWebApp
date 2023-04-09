import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/Produto';
import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private convertService: ConverterService) { }

  public produtos: Produto[];
  errorMessage: string;

  ngOnInit() {
    this.produtoService.obterTodos()
      .subscribe(
        produtos => this.produtos = produtos,
        error => this.errorMessage = error,
    );
  }

  setSrcImg(base64: string){
    return this.convertService.convertBase64ToFile(base64);
  }
}
