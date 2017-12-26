import { Component } from '@angular/core';
import { HomeComponent } from './home/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'WILL IS AWESOME';
  people = 'yes';
  name = "Will";
  age = 28;

  newperson =  {
    name: "Sarah",
    gender: "female",
    age: 40
  }

  yell(e) {
    alert("I am yelling")
  }
}
