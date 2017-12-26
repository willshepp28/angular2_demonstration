import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // where we can define data
  homeTitle = "welcome to the homepage....";
  thyString = "Strings are things";
  boolUlose = true;

  // Use input decorator for custom property binding
  @Input() newperson;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }

  // event binding
  alertMe(val){
    alert(val);
  }

  // two way data binding
person = {
  name: "Will",
  gender: "male",
  age: 28
};



  constructor() { }

  ngOnInit() {
  }

}
