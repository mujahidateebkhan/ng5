import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  constructor(private route:ActivatedRoute, private router:Router,private _data:DataService,
    private title: Title
  ) { 
    this.route.params.subscribe(res => console.log(res.id));
    this.title.setTitle("About");
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }
  
  sendMeHome(){
    this.router.navigate(['']);
  }
}
