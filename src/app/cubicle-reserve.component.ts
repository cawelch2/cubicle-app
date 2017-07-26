import 'rxjs/add/operator/switchMap';
import { Component, OnInit, DoCheck }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Cubicle } from './cubicle';
import { CubicleService } from './cubicle.service';
import { DashboardComponent } from './dashboard.component';

@Component({
  selector: 'app-cubicle-reserve',
  templateUrl: './cubicle-reserve.component.html',
  styleUrls: ['./cubicle-reserve.component.css']
})
export class CubicleReserveComponent implements OnInit, DoCheck {

  constructor(
    private cubicleService: CubicleService,
    private route: ActivatedRoute,
    private location: Location,
    private dashboard: DashboardComponent
  ) {}

  //Refresh the date anytime a change is made
  ngDoCheck(): void {
    this.dashboard.ngDoCheck();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.cubicleService.getCubicle(+params['id']))
      .subscribe(cubicle => this.cubicleService.cubicle = cubicle);
  }
  
  //Used to power the "Back" button
  goBack() {
    this.location.back();
  }

  //Each method assigns a name to a weekday variable in the cubicle array
  setMonday(tempMon: string): void {
    this.cubicleService.cubicle.mon=tempMon;
    this.cubicleService.update(this.cubicleService.cubicle);
  }

  setTuesday(tempTues: string): void {
    this.cubicleService.cubicle.tues=tempTues;
    this.cubicleService.update(this.cubicleService.cubicle);
  }

  setWednesday(tempWed: string): void {
    this.cubicleService.cubicle.wed=tempWed;
    this.cubicleService.update(this.cubicleService.cubicle);
  }

  setThursday(tempThurs: string): void {
    this.cubicleService.cubicle.thurs=tempThurs;
    this.cubicleService.update(this.cubicleService.cubicle);
  }

  setFriday(tempFri: string): void {
    this.cubicleService.cubicle.fri=tempFri;
    this.cubicleService.update(this.cubicleService.cubicle);
  }

  //Used to power the "Reserve" button, checks if each string is not empty and not null, then assigns it to the appropriate variable in the cubicles array
  save(cubicleMon: string, cubicleTues: string, cubicleWed: string, cubicleThurs: string, cubicleFri: string): void {
    if(cubicleMon!='' && cubicleMon!=null)
      this.setMonday(cubicleMon);
    if(cubicleTues!='' && cubicleTues!=null)
      this.setTuesday(cubicleTues);
    if(cubicleWed!='' && cubicleWed!=null)
      this.setWednesday(cubicleWed);
    if(cubicleThurs!='' && cubicleThurs!=null)
      this.setThursday(cubicleThurs);
    if(cubicleFri!='' && cubicleFri!=null)
      this.setFriday(cubicleFri);
    this.cubicleService.update(this.cubicleService.cubicle)
      .then(() => this.goBack());
  }

}
