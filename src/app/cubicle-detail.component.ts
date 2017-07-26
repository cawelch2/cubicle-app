import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Cubicle }         from './cubicle';
import { CubicleService }  from './cubicle.service';
@Component({
  selector: 'cubicle-detail',
  templateUrl: './cubicle-detail.component.html',
  styleUrls: [ './cubicle-detail.component.css' ]
})
export class CubicleDetailComponent implements OnInit {

  constructor(
    private cubicleService: CubicleService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.cubicleService.getCubicle(+params['id']))
      .subscribe(cubicle => this.cubicleService.cubicle = cubicle);
  }

  //Used to power the "Back" button
  goBack(): void {
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

  //Used to power the "Reserve" button checks which checkboxes are checked and makes sure the name is not an emptry string, then assigns the name to the days that are checked
  save(cubicleMon: boolean, cubicleTues: boolean, cubicleWed: boolean, cubicleThurs: boolean, cubicleFri: boolean, tempName: string): void {
    if(cubicleMon && tempName!='')
      this.setMonday(tempName);
    if(cubicleTues && tempName!='')
      this.setTuesday(tempName);
    if(cubicleWed && tempName!='')
      this.setWednesday(tempName);
    if(cubicleThurs && tempName!='')
      this.setThursday(tempName);
    if(cubicleFri && tempName!='')
      this.setFriday(tempName);
    this.cubicleService.update(this.cubicleService.cubicle)
      .then(() => this.goBack());
  }
}
