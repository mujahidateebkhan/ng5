import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
 readonly rootUrl = 'http://localhost:8080/user-portal';
  constructor(private http:HttpClient) { }

  registerUser(user:User){
    console.log(user.userName);
    const body: User = {
      userName:user.userName,
      password:user.password,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email
    }

    return this.http.post(this.rootUrl+'/api/createUser',body);
  }
}
