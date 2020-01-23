import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient ) { }

  registerNewUser(userData) {
    return this.http.post('http://127.0.0.1:8000/api/users/', userData)
  }

  getPost() {
    return this.http.get('http://127.0.0.1:8000/api/posts/')
  }
}
