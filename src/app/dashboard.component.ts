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
}
