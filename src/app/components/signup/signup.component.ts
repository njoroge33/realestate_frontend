import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register;
  
  constructor(private userService: UserService, private router: Router ) {}

  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: '',
    };
  }
  registerUser(){
    this.userService.registerNewUser(this.register).subscribe(
      response => {
        this.router.navigate(['/'])
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
