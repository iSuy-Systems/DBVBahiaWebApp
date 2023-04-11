import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserService } from '../shared/services/user.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
      .pipe(
        tap(response => {
          return response;
        }),
        catchError((event: any) => {
          if (event instanceof HttpErrorResponse) {
            event = <HttpErrorResponse>event;
            if (event.status === 401) {
              this.userService.logout();
            }

            if (event.status === 403) {
              return throwError(() => event)
            }

            return throwError(() => this.handleMessageError(event));
          } else {
            return throwError(() => event);
          }
        })
      );
  }

  handleMessageError(event: any) {
    return event.error?.message ?? event.message ?? "";
  }
}
