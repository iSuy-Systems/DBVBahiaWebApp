import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: ProdutoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lista-produtos'
      },
      { path: 'lista-produtos', component: ListaComponent },
      { path: 'cadastro-produtos', component: CadastroComponent },
      { path: 'edit-product/:productId', component: EditComponent },
      { path: 'delete-product/:productId', component: DeleteComponent },
      { path: 'details-product/:productId', component: DetailsComponent }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class ProdutoRoutingModule { }
