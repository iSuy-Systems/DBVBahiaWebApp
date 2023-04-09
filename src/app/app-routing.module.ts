import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './produtos/cadastro/cadastro.component';
import { ListaComponent } from './produtos/lista/lista.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'cadastro-produtos', component: CadastroComponent },
  {path: 'lista-produtos', component: ListaComponent },
  {path: 'entrar', component: LoginComponent },
  {path: 'register', component: RegisterComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
