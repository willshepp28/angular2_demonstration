import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // where we can define data
  homeTitle = "welcome to the homepage....";

  constructor() { }

  ngOnInit() {
  }

}
