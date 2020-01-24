import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import jwtHelper from 'angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login;
  
  constructor(private userService: UserService, private router: Router ) {}

  ngOnInit() {
    this.login = {
      username: '',
      password: '',
    };
  }

  onLogin(){
    this.userService.loginUser(this.login).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('access_token', response['token'])
        this.router.navigate(['/'])
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
