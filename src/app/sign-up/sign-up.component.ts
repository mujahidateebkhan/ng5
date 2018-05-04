import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user:User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService: UserService, private toastr: ToastrService,private title: Title) { }

  ngOnInit() {
    this.resetForm();
    this.title.setTitle("SignUp");
  }

  resetForm(form?: NgForm){
    if(form != null)
     form.reset();
    this.user = {
      userName:'',
      password:'',
      firstName:'',
      lastName:'',
      email:'',
    };
  }

  OnSubmit(form: NgForm){
    this.userService.registerUser(form.value)
    .subscribe((data:any) => {
      console.log(data);
      if(data.id > 0){
        this.resetForm(form);
        this.toastr.success("User Registration Success");
      }
      else
        this.toastr.error(data.Error[0]);
    });
  }
}
