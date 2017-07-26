import { Component, OnInit } from '@angular/core';

import { Cubicle } from './cubicle';
import { CubicleService } from './cubicle.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  cubicles: Cubicle[] = [];

  constructor(private cubicleService: CubicleService) { }

  ngOnInit(): void {
    this.cubicleService.getCubicles()
      .then(cubicles => this.cubicles = cubicles.slice(0));
  }
}
