import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username ;
  password ;
  language = 'en';
  constructor(private loginService: LoginService) {}


  ngOnInit(): void {
  }

  login() {
    let userDetail = { username: this.username, password: this.password, language: this.language};
    this.loginService.login(userDetail).subscribe(resp => {
      console.log(resp);
    });
  }
}
