import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  show: boolean = true;

  constructor(private router: Router){
    router.events.subscribe((val) => {
    if(localStorage.getItem('userToken') != null){
      this.show = false;
    }else{
      this.show = true;
    }
  });
  }

  ngOnInit(){
    
  }
  
}
