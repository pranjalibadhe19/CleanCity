import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  SERVER_API = 'http://15.207.157.102:8000/';
  enquire;

  constructor(private http: HttpClient) {}
}
