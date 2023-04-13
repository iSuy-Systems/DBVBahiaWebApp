import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto/Produto';
import { ConverterService } from 'src/app/shared/services/converter.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  constructor(private productService: ProdutoService, private convertService: ConverterService) { }

  public produtos: Produto[];
  errorMessage: string;

  ngOnInit() {
    this.productService.obterTodos()
      .subscribe(
        produtos => this.produtos = produtos,
        error => this.errorMessage = error,
    );
  }

  updateAtivo(product: Produto, ativo: boolean): void {
    product.ativo = ativo;
    this.productService.updateProduct(product).subscribe(()=>{
      console.log(`Product ${product.nome} now is ${ativo ? 'active': 'inactive'}!`);
    });
  }

  deleteProduct(product: Produto): void {
    this.productService.deleteProduct(product.id).subscribe(()=>{
      this.produtos = this.produtos.filter((p: Produto)=> p.id !== product.id);
      console.log(`Product ${product.nome} was deleted!`);
    });
  }

  setSrcImg(base64: string){
    return this.convertService.convertBase64ToFile(base64);
  }
}
