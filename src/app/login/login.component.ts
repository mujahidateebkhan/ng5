import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin(userName,password){
    this.userService.userAuthentication(userName,password).subscribe((data:any) => {
      localStorage.setItem('userToken',data.token);
      this.router.navigate(['/profile']);
    },
    (err:HttpErrorResponse) => {
      this.isLoginError = true;
    }
  );
  }

}
