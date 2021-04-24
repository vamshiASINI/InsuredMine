import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private injector: Injector,
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  const headers = new HttpHeaders({
    'Authorization': `${this.authService.getUser()}`,
    'Content-Type': 'application/json'
  });
    const clonedReq = req.clone({
    headers
    });
    return next.handle(clonedReq).do(
      event => {
        if (event instanceof HttpResponse) {
        }
      },
      err => {
        this.authService = this.injector.get(AuthService);

        if (err instanceof HttpErrorResponse && err.status === 400) {
          this.authService.removeProfile();
          this.router.navigate(['/auth/login']);
        } else if (err instanceof HttpErrorResponse && err.status === 0) {

          this.authService.removeProfile();
          this.router.navigate(['/auth/login']);
        }
      });
  }

}
