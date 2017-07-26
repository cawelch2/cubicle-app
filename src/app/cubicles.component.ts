import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Cubicle }                from './cubicle';
import { CubicleService }         from './cubicle.service';
 
@Component({
  selector: 'my-cubicles',
  templateUrl: './cubicles.component.html',
  styleUrls: [ './cubicles.component.css' ]
})
export class CubiclesComponent implements OnInit {
  cubicles: Cubicle[];
  selectedCubicle: Cubicle;
 
  constructor(
    private cubicleService: CubicleService,
    private router: Router) { }
 
  getCubicles(): void {
    this.cubicleService
        .getCubicles()
        .then(cubicles => this.cubicles = cubicles);
  }

  ngOnInit(): void {
    this.getCubicles();
  }
 
  onSelect(cubicle: Cubicle): void {
    this.selectedCubicle = cubicle;
  }
 
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCubicle.id]);
  }
}