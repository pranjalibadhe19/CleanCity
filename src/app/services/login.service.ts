import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  SERVER_API = 'http://15.207.157.102:8000/';

  login(userDetail) {
    let url = this.SERVER_API + 'user/login/';
    console.log('url :', url);
    return this.http.post(url, userDetail);
  }
}
