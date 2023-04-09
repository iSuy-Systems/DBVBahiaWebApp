import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';

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
      { path: 'cadastro-produtos', component: CadastroComponent }
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
