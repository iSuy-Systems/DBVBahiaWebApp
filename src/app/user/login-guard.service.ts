import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../shared/services/user.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate(): Promise<boolean> | boolean {
    return new Promise((resolve) => {
      const user = this.userService.obterUsuario();

      if (user) {
        this.router.navigate(['/']);
        resolve(true);
      } else {
        localStorage.clear();
        resolve(true);
      }
    });
  }
}
