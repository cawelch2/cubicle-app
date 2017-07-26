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

  goBack(): void {
    this.location.back();
  }

  setMonday(tempMon: string): void {
    this.cubicleService.cubicle.mon=tempMon;
  }

  setTuesday(tempTues: string): void {
    this.cubicleService.cubicle.tues=tempTues;
  }

  setWednesday(tempWed: string): void {
    this.cubicleService.cubicle.wed=tempWed;
  }

  setThursday(tempThurs: string): void {
    this.cubicleService.cubicle.thurs=tempThurs;
  }

  setFriday(tempFri: string): void {
    this.cubicleService.cubicle.fri=tempFri;
  }

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
