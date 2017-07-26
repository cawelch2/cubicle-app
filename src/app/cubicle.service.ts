import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cubicle } from './cubicle';

@Injectable()
export class CubicleService {
  private cubiclesUrl = 'api/cubicles';
  private headers = new Headers({'Content-Type': 'application/json'});
  cubicle: Cubicle;

  constructor(private http: Http) { }

  //Used to retrieve the cubicles array from the in memory data
  getCubicles(): Promise<Cubicle[]> {
    return this.http.get(this.cubiclesUrl)
              .toPromise()
              .then(response => response.json().data as Cubicle[])
              .catch(this.handleError);
  }

  //Used to retrieve the data of a specific cubicle from the cubicles array
  getCubicle(id: number): Promise<Cubicle> {
    const url = `${this.cubiclesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Cubicle)
      .catch(this.handleError);
  }

  //Catches any errors that may occur
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  //Used at the end of any method that updates a cubicle, makes sure the local cubicle and the cubicle from the array have the same data
  update(cubicle: Cubicle): Promise<Cubicle> {
    const url = `${this.cubiclesUrl}/${cubicle.id}`;
    this.cubicle.mon=cubicle.mon;
    this.cubicle.tues=cubicle.tues;
    this.cubicle.wed=cubicle.wed;
    this.cubicle.thurs=cubicle.thurs;
    this.cubicle.fri=cubicle.fri;
    return this.http
      .put(url, JSON.stringify(cubicle), {headers: this.headers})
      .toPromise()
      .then(() => cubicle)
      .catch(this.handleError);
  }
}