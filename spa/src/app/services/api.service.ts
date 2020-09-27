import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  baseUrl = environment.baseUrl;

  constructor(
    @Inject(forwardRef(() => HttpClient)) private _http: HttpClient
  ) {}

  postLogin(credentials) {
    const bodyString = JSON.stringify(credentials);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this._http.post( this.baseUrl + '/api/login', bodyString, httpOptions);
  }

  postLogout() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':  'Bearer ' + localStorage.getItem('token'),
      })
    };

    return this._http.post( this.baseUrl + '/api/logout', null, httpOptions);
  }

  getExpirationCheck() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  'Bearer ' + localStorage.getItem('token'),
      })
    };

    return this._http.get(this.baseUrl + '/api/expiration-check', httpOptions);
  }
}
