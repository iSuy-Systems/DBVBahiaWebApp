import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BaseService } from './base.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private baseService: BaseService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return new Promise((resolve) => {
      const user = this.baseService.obterUsuario();
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['entrar']);
          resolve(false);
        }
    });
  }
}
