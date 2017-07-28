import { Component, OnInit, DoCheck } from '@angular/core';

import { Cubicle } from './cubicle';
import { CubicleService } from './cubicle.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit, DoCheck {

  cubicles: Cubicle[] = [];
  today: number;

  constructor(private cubicleService: CubicleService) { }

  //Refresh the date anytime a change is made
  ngDoCheck(): void {
    this.today = new Date().getDay();
  }

  //When the app is started, the cubicles are retrieved and displayed on the dashboard
  ngOnInit(): void {
    this.cubicleService.getCubicles()
      .then(cubicles => this.cubicles = cubicles.slice(0));
  }

  //Determines what day of the week it is
  findDay(): String {
    if(this.today==0)
      return "Sunday";
    if(this.today==1)
      return "Monday";
    if(this.today==2)
      return "Tuesday";
    if(this.today==3)
      return "Wednesday";
    if(this.today==4)
      return "Thursday";
    if(this.today==5)
      return "Friday";
    if(this.today==6)
      return "Saturday";
  }
}
