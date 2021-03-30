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
  firstname;
  lastname;
  mobilenumber;
  confirmpassword;

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

  register(){
      let registerDetail = {
        first_name: this.firstname,
        last_name: this.lastname,
        mobile_no: this.mobilenumber,
        password: this.password,
        confirm_password: this.confirmpassword,
        language: 'en'
      };
      console.log(registerDetail);
      this.loginService.register(registerDetail).subscribe((resp: any) => {
        console.log(resp);
      });  
   }
}
