import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register;
  
  constructor(private userService: UserService ) {}

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
        alert('user' + this.register.username + 'has been registered!')
      },
      error => console.log('error', error)
    );
  }
}
