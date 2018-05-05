import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
 readonly rootUrl = 'http://localhost:7777';
  constructor(private http:HttpClient) { }

  registerUser(user:User){
    const body: User = {
      userName:user.userName,
      password:user.password,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl+'/api/createUser',body,{headers:reqHeader});
  }

  userAuthentication(userName,password){
    const credentials = {username: userName, password: password};
    var reqHeader = new HttpHeaders({'Content-Type':'application/json','No-Auth':'True'});
    return this.http.post(this.rootUrl+"/token/generate-token",credentials, {headers:reqHeader}); 
  }

  getUsers(){
    return this.http.get(this.rootUrl+"/api");
  }
}
