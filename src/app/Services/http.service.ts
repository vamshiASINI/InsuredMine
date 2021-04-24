
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }


  get<T>(url: string, options: {} = {}): Observable<T> {
    return this.http.get<T>(url, options)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  post<T>(url: string, body: string = null, options: {} = {}): Observable<T> {
    return this.http.post<T>(url, body, options)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }


  put<T>(url: string, body: string, options: {} = {}): Observable<T> {
    return this.http.put<T>(url, body, options)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }


  delete<T>(url: string, options: {} = {}): Observable<T> {
    return this.http.delete<T>(url, options)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }


  patch<T>(url: string, body: string, options: {} = {}): Observable<T> {
    return this.http.patch<T>(url, body, options)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }
}
