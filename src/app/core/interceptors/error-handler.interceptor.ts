import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastrService: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            this.toastrService.error(
              'Bu sayfaya erişmek için giriş yapmanız gerekmektedir.'
            );
            this.router.navigateByUrl('/login');
          }
          if (error.status == 400 || error.error == 'BusinessException') {
          }
          if (error.status == 400 || error.error == 'ValidationException') {
          }
        }
        throw error;
      })
    );
  }
}
