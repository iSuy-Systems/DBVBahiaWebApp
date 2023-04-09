import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { User } from '../models/auth/user.model';
import { BaseService } from '../../base/base.service';


@Injectable()
export class UserService extends BaseService {

  constructor(private http: HttpClient) { super() }

  login(user: User): Observable<User> {

    return this.http
      .post(this.UrlServiceV1 + 'entrar', user, super.ObterHeaderJson())
      .pipe(
        map(super.extractData),
        catchError(super.serviceError)
      );
  }

  logout() {
    localStorage.setItem('app.user', null);
    localStorage.setItem('app.token', null);
  }

  persistirUserApp(response: any) {
    localStorage.setItem('app.token', response.accessToken);
    localStorage.setItem('app.user', JSON.stringify(response.userToken));
  }
}
