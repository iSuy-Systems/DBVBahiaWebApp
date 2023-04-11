import { NgModule } from '@angular/core';
import { ProdutoComponent } from './produto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ListaComponent } from './lista/lista.component';
import { ProdutoService } from 'src/app/shared/services/produto.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    ProdutoRoutingModule,
    SharedModule
  ],
  declarations: [
    ProdutoComponent,
    ListaComponent,
    CadastroComponent,
    EditComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }
