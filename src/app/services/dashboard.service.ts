import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  SERVER_API = 'http://127.0.0.1:8000/';
  enquire;
  

  constructor(private http: HttpClient) {}

  enquires(userEnquires) {
    let url = this.SERVER_API + 'user/enquires/';
    console.log('url :', url);
    return this.http.post(url, userEnquires);
  }
}
