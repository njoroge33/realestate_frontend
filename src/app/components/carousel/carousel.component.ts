import { Component, OnInit, OnChanges } from '@angular/core';  
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-carousel',  
  templateUrl: './carousel.component.html',  
  styleUrls: ['./carousel.component.css']  
})  
export class CarouselComponent implements OnInit, OnChanges {  
  loggedin: boolean;
  
  constructor(config: NgbCarouselConfig, private userService: UserService, private router: Router) {  
    config.interval = 10000;
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }
  ngOnInit() {
    this.loggedin = this.userService.isLoggedIn();
  }
  
  ngOnChanges() {
    this.loggedin = this.userService.isLoggedIn();
  }

  refresh(): void {
    window.location.reload();
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.refresh()
    }
  }
}  
