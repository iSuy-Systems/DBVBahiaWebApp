import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Produto } from 'src/app/shared/models/produto/Produto';
import { ConverterService } from 'src/app/shared/services/converter.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  $product = new BehaviorSubject<Produto>(new Produto());
  productId: string;

  constructor(
    private productService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private convertService: ConverterService
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');

    this.productService.getProduct(this.productId).subscribe((product: Produto) => {
      this.$product.next(product);
    });
  }

  setSrcImg(base64: string){
    return this.convertService.convertBase64ToFile(base64);
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.productId).subscribe(()=>{
      console.log(`Product ${this.$product.getValue().nome} was deleted!`);
      this.backListProduct();
    });

  }

  backListProduct(){
    this.router.navigate(['/produto/lista-produtos']);
  }
}
