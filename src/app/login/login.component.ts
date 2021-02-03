import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  language = 'en';
  errormessage;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    let userDetail = {
      username: this.username,
      password: this.password,
      language: 'en'
    };
    this.loginService.login(userDetail).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status) {
        this.router.navigate(['/dashboard']);
      }
      else {
        this.errormessage = resp.validation;
      }
    });
  }
}
