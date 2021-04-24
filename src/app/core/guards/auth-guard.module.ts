import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../Services/auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
         console.log('Authenticated: ', this.authService.isLoggedIn())
        if (this.authService.isLoggedIn()) {
          this.authService.setLoginStatus(1);
          return true; }
        this.router.navigate(['/auth/login']);
        return false;
    }
}
