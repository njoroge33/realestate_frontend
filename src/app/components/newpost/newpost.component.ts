import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  house_image: File;
  description: string;
  location:string;
  bedrooms_no: string;
  bathrooms_no: string;
  plot_size: string;
  cost: string;

  constructor(private userService: UserService, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit() {

  }

  onSelectFile(event) { // called each time file input changes
    this.house_image = event.target.files[0];

  }

  createNewPost(){
    const post = new FormData;
    post.append('house_image', this.house_image, this.house_image.name);
    post.append('description', this.description);
    post.append('location', this.location);
    post.append('bedrooms_no', this.bedrooms_no);
    post.append('bathrooms_no',this.bathrooms_no);
    post.append('plot_size', this.plot_size);
    post.append('cost', this.cost);
    
    this.userService.newPost(post).subscribe(
      response => {
        this.router.navigate(['/'])
      },
      error => console.log('error', error)
    );
  }

}
