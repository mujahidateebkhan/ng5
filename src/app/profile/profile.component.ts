import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userList: any;
  constructor(private router: Router, private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data)=>{
      this.userList = data;
      console.log(this.userList);
    });
  }

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  getUserList(){
    
  }
}
