import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Picture } from 'src/app/shared/models/common/Picture.model';
import { Fornecedor } from 'src/app/shared/models/fornecedor/Fornecedor';
import { Produto } from 'src/app/shared/models/produto/Produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  errors: any[] = [];
  fornecedores: Fornecedor[];
  // imagemForm: any;
  imagemNome: string;
  imageBase64: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProdutoService,
    private route: ActivatedRoute
  ) {
    this.productService.obterFornecedores()
    .subscribe(
      fornecedores => this.fornecedores = fornecedores,
      fail => this.errors = fail.error?.errors
    );

  // this.imagemForm = new FormData();
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      fornecedorId: '',
      nome: '',
      descricao: '',
      imagemUpload: '',
      imagem: '',
      valor: ['', [Validators.required, Validators.min(0.01)]],
      ativo: new UntypedFormControl(false),
      nomeFornecedor: ''
    });

    this.productId = this.route.snapshot.paramMap.get('productId');

    this.productService.getProduct(this.productId).subscribe((product) => {
      this.productForm.patchValue(product);
      debugger
      this.imagemNome = product.picture.name;
    });
  }

  editProduct() {
    const updatedProduct = this.productForm.value;
    updatedProduct.id = this.productId;
    this.productUpdateHandle(updatedProduct).subscribe(() => {
      console.log('Product updated!');
    });
  }

  productUpdateHandle(product: Produto): Observable<Produto> {

    product.picture = new Picture();

    product.picture.imagemUpload64 = this.imageBase64;
    product.picture.name = this.imagemNome;

    return this.productService.updateProduct(product);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.imagemNome = "";
    debugger
    if (file) {
      this.imagemNome = file.name;
    }
  }

  upload(file: any) {
    // necessario para upload via IformFile
    // this.imagemForm = file[0];
    this.imagemNome = file[0].name;
debugger
    if(file[0].size > 410){
      this.errors.push("Imagem excedeu o tamanho. Máximo permitido 5MB");
      return;
    }

    // necessario para upload via base64
    var reader = new FileReader();
    reader.onload = this.manipularReader.bind(this);
    reader.readAsBinaryString(file[0]);
  }

  manipularReader(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.imageBase64 = btoa(binaryString);
  }
}
