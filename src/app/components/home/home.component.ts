import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPost()
      .subscribe( posts => {
        console.log(posts);
        this.posts = posts;
      });
  }

}
