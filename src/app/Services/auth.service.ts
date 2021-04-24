import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable()
export class AuthService {
 static AUTH_USER = 'user';
  private apiUrl = + '';
  token :any =null;

  constructor(private httpService: HttpService) { }

  login(authReq) {
    return this.httpService.post(this.apiUrl + '/Users/User/Signin', authReq);
  }


  logout() {
    return this.httpService.post(this.apiUrl + '/Users/User/SignOut');
  }





  isLoggedIn(): boolean {
    if (localStorage.getItem(AuthService.AUTH_USER)) {
      return true;
    }
    return false;
  }


  setUser(token) {
    this.token = token;
    if (token !=null) {
      localStorage.setItem( AuthService.AUTH_USER,JSON.stringify(this.token))
    }
  }


  getUser() {
    try {
      if ((this.token =!undefined || this.token!=null)) {
        this.token = JSON.parse(localStorage.getItem(AuthService.AUTH_USER));
      }
      return this.token;
    } catch (error) {
      console.log(error);
      this.token = null;
    }
  }


  removeProfile(): void {
    this.setUser(null);
    localStorage.clear()
  }
  public loginStatus = 0;

  setLoginStatus(status: number) {
    this.loginStatus = status;
  }
}
