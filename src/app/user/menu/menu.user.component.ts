import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/auth/user.model';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu.user.component.html'
})
export class MenuUserComponent {

  saudacao: string;
  user: User;

  constructor(private userService: UserService, private router: Router) {  }

  userLogado(): boolean {
    this.user = this.userService.obterUsuario();
    if (this.user) {
      this.saudacao = "Olá " + this.user.email;
      return true;
    }

    return false;
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/entrar']);
  }
}
