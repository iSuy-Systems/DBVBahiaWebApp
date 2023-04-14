import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Produto } from 'src/app/shared/models/produto/Produto';
import { ConverterService } from 'src/app/shared/services/converter.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product$ = new BehaviorSubject<Produto>(new Produto());
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
      this.product$.next(product);
    });
  }

  setSrcImg(base64: string){
    return this.convertService.convertBase64ToFile(base64);
  }

  backListProduct(){
    this.router.navigate(['/produto/lista-produtos']);
  }
}
