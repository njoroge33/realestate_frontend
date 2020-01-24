import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) { }

  registerNewUser(userData) {
    return this.http.post('https://estateserver.herokuapp.com/api/users/', userData)
  }

  loginUser(userData) {
    return this.http.post('https://estateserver.herokuapp.com/api/auth/', userData)
  }

  
  newPost(post) {
    return this.http.post("https://estateserver.herokuapp.com/api/posts/", post)
  }

  getPost() {
    return this.http.get("https://estateserver.herokuapp.com/api/posts/")
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
}
