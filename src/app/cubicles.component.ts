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
 
  //Used to retrieve the cubicles array using the getCubicles() method from CubicleService
  getCubicles(): void {
    this.cubicleService
        .getCubicles()
        .then(cubicles => this.cubicles = cubicles);
  }

  //When the app is initialized, the cubicles are retrieved
  ngOnInit(): void {
    this.getCubicles();
  }
 
  //Represents which cubicle is selected when clicked on
  onSelect(cubicle: Cubicle): void {
    this.selectedCubicle = cubicle;
  }
 
  //Used to view the details of a specific cubicle in the cubicles array
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCubicle.id]);
  }
}